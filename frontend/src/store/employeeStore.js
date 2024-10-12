import {create} from 'zustand'
import axios from 'axios'

 const API_URL = process.env.NODE_ENV === "production" 
? "https://backend-hr3.jjm-manufacturing.com/api/auth" 
: "http://localhost:7687/api/employee";

//  const API_URL = "https://backend-hr3.jjm-manufacturing.com/api/auth";

axios.defaults.withCredentials = true;

export const useEmployeeStore = create((set)=>({
    user:null,
    isAuthenticated:false,
    isCheckingAuth:true,
    message:null,
    error:null,

      registerUser: async (formData) => {
        try {
          const response = await axios.post(`${API_URL}/register`, formData);
          set({
            user: response.data.user || null,
            message:response.data.message,
            error: null,
          });
          return true;
        } catch (error) {
          const errorMessage = error.response?.data?.message || "Error registering user";
          set({
              error: errorMessage,
          });
          throw new Error(errorMessage);
      }
      },

      fetchData: async () => {
        try {
          const response = await axios.get(`${API_URL}/fetch`);
          set({
              user: response.data.user || null,
              message: response.data.message,
              error: null,
          });
          return true;
        } catch (error) {
          set({
            user: null,
            message: null,
            error: error.response?.data?.message || "Error in fetching user data!",
        });
        return false;
        }
      }

}));
