import {create} from 'zustand'
import axios from 'axios'

const API_URL = process.env.NODE_ENV === "production"
  ? "https://backend-hr3.jjm-manufacturing.com/api/auth"
  : process.env.NODE_ENV === "render"
  ? "https://backend-manufacturing-hr-3.onrender.com/api/auth"
  : "http://localhost:7687/api/auth";


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
          const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
          const csrfToken = csrfResponse.data.csrfToken;

          const response = await axios.post(`${API_URL}/register`, formData,          
            { headers:{ 'csrf-token': csrfToken}});
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
      },

      changePassword: async (currentPassword,newPassword,confirmPassword) => {
        const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
        const csrfToken = csrfResponse.data.csrfToken;
        try {
          const response = await axios.put(`${API_URL}/change-password`, {
            currentPassword,
            newPassword,
            confirmPassword,
          },          
          { headers:{ 'csrf-token': csrfToken}});
    
          set({
            message: response.data.message || "Password changed successfully.",
            error: null,
          });
    
          return true;
        } catch (error) {
          console.error("Change Password Error:", error);
          const errorMessage = error.response?.data?.errors
            ? error.response.data.errors.join(", ")
            : "Error changing password.";
          set({
            message: null,
            error: errorMessage,
          });
    
          return false;
        }
      },

      verifyAccount: async (token,newPassword,confirmPassword) => {
        const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
        const csrfToken = csrfResponse.data.csrfToken;
        try {
          const response = await axios.put(`${API_URL}/verify-account/${token}`, {
            newPassword,
            confirmPassword,
          },          
          { headers:{ 'csrf-token': csrfToken}});
    
          set({
            message: response.data.message || "Password reset successfully.",
            error: null,
          });
    
          return { status: true, message: response.data.message }
        } catch (error) {
          console.error("Change Password Error:", error);
          const errorMessage = error.response?.data?.message || "Error changing password.";
          set({
            message: null,
            error: errorMessage,
          });
    
          return { status: false, message: errorMessage }
        }
      },

      resendVerification: async (email) => {
        const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
        const csrfToken = csrfResponse.data.csrfToken;
        try {
            const response = await axios.post(`${API_URL}/resend-verification`, {email},          
              { headers:{ 'csrf-token': csrfToken}});
            set({
                message: response.data.message || "Verification email has been sent successfully!",
                error: null,
            });
            return true;
        } catch (error) {
            console.error("Resend Verification Error:", error);
            const errorMessage = error.response?.data?.message || "Error resending verification email.";
            set({
                message: null,
                error: errorMessage,
            });
            return false;
        }
    },
}));
