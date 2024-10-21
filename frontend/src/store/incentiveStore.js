import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7687/api/incentive" : "/api/incentive";



//  const API_URL = "https://backend-hr3.jjm-manufacturing.com/api/incentive";

axios.defaults.withCredentials = true;

export const useIncentiveStore = create((set) => ({
    incentive: null,
    error: null,

    createIncentive: async (incentive) => {
        try {
          const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
          const csrfToken = csrfResponse.data.csrfToken;
      
          const response = await axios.post(`${API_URL}/create-incentives`, incentive, {
            headers: {'csrf-token':csrfToken},
          });
          set({
            incentive: response.data.incentive || null,
            message: response.data.message,
            error: null,
          });
          return {status:true,message:response.data.message};
        } catch (error) {
          set({
            error: error.response?.data.message || "Error in creating Incentive",
          });
                return {status:false,message:error.response?.data.message || "Error in creating Incentive" };
        }
      },

    fetchIncentive: async () => {
        try {
            const response = await axios.get(`${API_URL}/get-incentives`);
            set({
                incentive: response.data.incentives || [],
                error: null,
            });
        } catch (error) {
            set({
                error: error.response?.data?.message || "Error fetching incentives",
                incentive: [],
            });
        }
    },

    deleteIncentive: async (id) => {
        try {
            const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
            const csrfToken = csrfResponse.data.csrfToken;

            console.log("Deleting incentive with ID:", id);
            const response = await axios.delete(`${API_URL}/delete-incentives/${id}`,
                { headers:{ 'csrf-token': csrfToken}});
            set((state) => ({
                incentive: state.incentive.filter((i) => i._id !== id),
                error: null,
            }));
            return response.data;
        } catch (error) {
            console.error("Error deleting incentive:", error); 
            set({
                error: error.response?.data.message || "Error deleting incentive",
            });
            return false;
        }
    },

    updateIncentive: async (id, incentive) => {
        try {
            const csrfResponse = await axios.get(`${API_URL}/csrf-token`);
            const csrfToken = csrfResponse.data.csrfToken;

            const response = await axios.put(`${API_URL}/update-incentives/${id}`, incentive,
                { headers:{ 'csrf-token': csrfToken}});
            set((state) => ({
                incentive: state.incentive.map((i) => (i._id === id ? response.data.updatedIncentive : i)),
                error: null,
            }));
            return true;
        } catch (error) {
            console.log(error);
            set({
                error: error.response?.data.message || "Error updating incentive",
            });
            return false;
        }
    },
    
    
}));
