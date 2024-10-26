import { Notification } from "../model/notificationModel.js";

export const getNotifications = async (req, res) => {
    try {
        if (!req.user || !req.user._id){
            return res.status(401).json({message:'User not authenticated.'});
        }

        if(req.user.role !== 'Manager'){
            return res.status(403).json({message:'Access denied. Only managers can view notifications.'});
        }

        const notifications = await Notification.find({userId: req.user._id}).sort({createdAt: -1});
        return res.status(200).json(notifications);
    } catch (error) {
        console.error("Error fetching notifications:", error);
        return res.status(500).json({message:'Server error.',error: error.message});
    }
};

export const markAsRead = async (req, res) => {
  const {notificationId} = req.params;

  try {
    if(!req.user || !req.user._id){
      return res.status(401).json({message:'User not authenticated.'});
    }

    if(req.user.role !== 'Manager'){
      return res.status(403).json({message:'Only managers can mark notifications as read.'});
    }

    const notification = await Notification.findById(notificationId);

    if(!notification){
      return res.status(404).json({message:'Notification not found.'});
    }

    notification.read = true;
    await notification.save();

    await Notification.updateMany(
      {role:'Manager',read:true},
      {read:true}
    );

    return res.status(200).json({ message: 'Notification marked as read for the user, and all managers\' notifications updated.' });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    return res.status(500).json({ message: 'Server error.', error: error.message });
  }
};
