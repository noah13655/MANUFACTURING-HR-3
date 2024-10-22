import {create} from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7687/api/compensation" : "/api/compensation";

axios.defaults.withCredentials = true;

export const useCompensationStore = create((set) => ({
  compensationPositions: [],

  fetchCompensationPositions: async () => {
    try {
      const response = await axios.get(`${API_URL}/get-compensation-position`); // Adjust the URL as necessary
      set({ compensationPositions: response.data.data });
    } catch (error) {
      console.error('Failed to fetch compensation positions:', error);
    }
  },
}));
