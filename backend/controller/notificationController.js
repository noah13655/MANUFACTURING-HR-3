import { Notification } from "../model/notificationModel.js";

export const getNotifications = async (req, res) => {
    try {
      if (!req.user || !req.user._id) {
        return res.status(401).json({ message: 'User not authenticated.' });
      }
  
      const notifications = await Notification.find({ userId: req.user._id }).sort({ createdAt: -1 });
      return res.status(200).json(notifications);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error.', error: error.message });
    }
  };
