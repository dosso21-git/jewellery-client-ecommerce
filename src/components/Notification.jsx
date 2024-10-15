
import React, { useState, useEffect } from "react";
import { format, isToday, isYesterday } from "date-fns";
import { useNavigate } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import axios from "axios";

export default function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllNotifications(); // Fetch notifications on mount
  }, []);

  const getAllNotifications = async () => {
    try {
      const response = await axios.get('/api/user/getallnotification');
      if (response.data.data) {
        setNotifications(response.data.data); // Set notifications from API response
        console.log(response.data.data,"asjidikdasjks")
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

  const handleNotificationClick = (type) => {
    if(type == undefined) return
    navigate(`/all-category/${type}`);
    setIsOpen(false);
  };

  const groupNotificationsByDate = (notifications) => {
    const grouped = {
      today: [],
      yesterday: [],
      older: [],
    };

    notifications.forEach((notification) => {
      const notifDate = new Date(notification.createdAt);
      if (isToday(notifDate)) {
        grouped.today.push(notification);
      } else if (isYesterday(notifDate)) {
        grouped.yesterday.push(notification);
      } else {
        grouped.older.push(notification);
      }
    });

    return grouped;
  };

  const groupedNotifications = groupNotificationsByDate(notifications);

  return (
    <div className="relative">
      <button onClick={toggleNotification} className="fixed top-2 right-1 z-50 p-2 rounded-full shadow-lg">
        <IoMdNotifications />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40" onClick={toggleNotification} />
      )}

      <div className={`fixed top-0 right-0 w-80 h-screen bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 relative">
          <h2 className="text-lg font-bold mb-4">Notifications</h2>
          <button onClick={toggleNotification} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✖</button>

          <div className="h-[calc(100vh-100px)] overflow-y-auto">
            {Object.entries(groupedNotifications).map(([key, notifications]) => (
              notifications.length > 0 && (
                <div key={key}>
                  <h3 className="font-semibold text-gray-700 mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  {notifications.map((notif) => (
                    <div key={notif._id} className="flex items-center p-2 bg-gray-100 rounded-lg shadow mb-2 cursor-pointer" onClick={() => handleNotificationClick(notif?.offerId?.prodCategory)}>
                      <span className="text-white">🔔</span>
                      <div className="ml-2">
                        <p className="text-sm font-semibold">{notif.title || notif.message}</p>
                        <p className="text-xs text-gray-500">{format(new Date(notif.createdAt), "p")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
