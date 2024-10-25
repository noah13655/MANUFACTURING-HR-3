import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7687/api/notification" : "/api/notification";

axios.defaults.withCredentials = true;

export const useNotificationStore = create((set) => ({
    notifications: [],
    loading: false,
    error: null,

    // Function to fetch notifications
     getNotifications : async () => {
        set({ loading: true, error: null });
        console.log("Fetching notifications..."); // Debugging line
        try {
            const response = await axios.get(`${API_URL}/get-notifications`);
            console.log("Notifications fetched:", response.data); // Debugging line
            set({ notifications: response.data, loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false, error: error.response?.data?.message || 'An error occurred' });
        }
    }
    
}));
