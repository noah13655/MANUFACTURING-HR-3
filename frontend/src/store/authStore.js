import {create} from 'zustand'
import axios from 'axios'

const API_URL = "http://localhost:5000/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set)=>({
    user:null,
    isAuthenticated:false,
    isCheckingAuth:true,
    message:null,
    error:null,

    login: async (email,password) => {
        try {
            const response = await axios.post(`${API_URL}/login`,{email,password});
            set({
                isAuthenticated:true,
                user:response.data.user,
                error:null,
            });
        } catch (error) {
            set({
                isAuthenticated:false,
                user:null,
                error:error.response?.data?.message || "Error in logging in!"
            });
            throw error;
        }
    },

    checkAuth: async () => {
        set({isCheckingAuth:true,error:null});
        try {
        const response = await axios.get(`${API_URL}/check-auth`);
        set({
            user:response.data.user,
            isAuthenticated:true,
            isCheckingAuth:false,
        });
        } catch (error) {
        set({
            user:null,
            isAuthenticated:false,
            isCheckingAuth:false,
            error: error.response?.data?.message || "Error checking authentication",
        }) 
        }
    },

    
    logout: async () => {
        try {
          await axios.post(`${API_URL}/logout`);
          set({
            user: null,
            isAuthenticated: false,
            error: null,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error logging out",
          });
        }
      },


}));
