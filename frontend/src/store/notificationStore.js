import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7687/api/notification" : "/api/notification";

axios.defaults.withCredentials = true;

export const useNotificationStore = create((set) => ({
    notifications: [],
    loading: false,
    error: null,
    
}));
