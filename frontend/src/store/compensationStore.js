import {create} from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7687/api/compensation" : "/api/compensation";

axios.defaults.withCredentials = true;

export const useCompensationStore = create((set) => ({
  compensationPositions: [],
  compensationPlans:[],

  fetchCompensationPositions: async () => {
    try {
      const response = await axios.get(`${API_URL}/get-compensation-position`);
      set({ compensationPositions: response.data.data });
    } catch (error) {
      console.error('Failed to fetch compensation positions:', error);
    }
  },

  getCompensationPlans: async () => {
    try {
      const response = await axios.get(`${API_URL}/get-compensation-plans`);
      set({ compensationPlans: response.data.data });
    } catch (error) {
      console.error('Failed to fetch compensation positions:', error);
    }
  },



}));
