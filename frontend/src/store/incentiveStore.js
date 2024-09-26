import { create } from 'zustand';
import axios from 'axios';

const API_URL = process.env.NODE_ENV === "production" 
? "https://backend-hr3.jjm-manufacturing.com/api/incentive" 
: "http://localhost:7687/api/incentive";

//  const API_URL = "https://backend-hr3.jjm-manufacturing.com/api/incentive";

axios.defaults.withCredentials = true;

export const useIncentiveStore = create((set) => ({
    incentive: null,
    error: null,

    createIncentive: async (incentive) => {
        try {
            const response = await axios.post(`${API_URL}/create-incentives`, incentive);
            set({
                incentive: response.data.incentive || null,
                error: null,
            });
            return true;
        } catch (error) {
            set({
                error: error.response?.data.message || "Error in creating incentive"
            });
            return false;
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
                benefit: [],
            });
        }
    },

    deleteIncentive: async (id) => {
        try {
            console.log("Deleting benefit with ID:", id);
            const response = await axios.delete(`${API_URL}/delete-incentives/${id}`);
            set((state) => ({
                incentive: state.incentive.filter((i) => i._id !== id),
                error: null,
            }));
            return response.data;
        } catch (error) {
            console.error("Error deleting benefit:", error); 
            set({
                error: error.response?.data.message || "Error deleting Benefit",
            });
            return false;
        }
    },

    updateIncentive: async (id, incentive) => {
        try {
            const response = await axios.put(`${API_URL}/update-incentives/${id}`, incentive);
            set((state) => ({
                incentive: state.incentive.map((i) => (i._id === id ? response.data.updatedIncentive : i)),
                error: null,
            }));
            return true;
        } catch (error) {
            console.log(error);
            set({
                error: error.response?.data.message || "Error updating Benefit",
            });
            return false;
        }
    },
    
    
}));
