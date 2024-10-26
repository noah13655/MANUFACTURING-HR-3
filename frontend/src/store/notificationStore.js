import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:7687/api/notification" : "/api/notification";

axios.defaults.withCredentials = true;

export const useNotificationStore = create((set) => ({
    notifications: [],
    loading: false,
    error: null,

    fetchNotifications: async (userRole) => {
        if(userRole === 'Manager'){
            try {
                const response = await axios.get(`${API_URL}/get-notifications`);
                const unread = response.data.filter(notification => !notification.read);
                const read = response.data.filter(notification => notification.read);
                set({notifications:response.data,unreadNotifications:unread,readNotifications:read});
            } catch (error) {
                console.error('Error fetching notifications:', error);
                set({notifications:[],error});
            }
        }else{
            set({notifications:[]});
        }
    },

    markAsRead: async (notificationId) => {
        try {
            await axios.put(`${API_URL}/mark-as-read/${notificationId}`);
            set((state) => ({
                notifications: state.notifications.map(notification =>
                    notification._id === notificationId ? {...notification,read:true} : notification
                ),
            }));
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    },
}));
