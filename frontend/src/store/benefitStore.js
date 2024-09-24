import { create } from 'zustand';
import axios from 'axios';

const API_URL = "http://localhost:7687/api/auth";

axios.defaults.withCredentials = true;

export const useBenefitStore = create((set) => ({
    benefit: null,
    error: null,

    createBenefit: async (benefit) => {
        try {
            const response = await axios.post(`${API_URL}/create-benefits`, benefit);
            set({
                benefit: response.data.benefit || null,
                error: null,
            });
            return true;
        } catch (error) {
            set({
                error: error.response?.data.message || "Error in creating Benefit"
            });
            return false;
        }
    },

    fetchBenefit: async () => {
        try {
          const response = await axios.get(`${API_URL}/get-benefits`);
          set({
            benefit: response.data.benefits || [],
            error: null,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error fetching users",
            benefit: [],
          });
        }
      },

      

}));
