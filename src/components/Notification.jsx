
// import React, { useState, useEffect } from "react";
// import { format, isToday, isYesterday } from "date-fns"; // date-fns for date formatting
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// // Example data format from backend
// const notificationsData = [
//   { id: 1, message: "James Doe favourited an item", date: new Date() },
//   { id: 2, message: "Sash added you to the group: UX Designers", date: new Date() },
//   { id: 3, message: "Sarah posted in the thread: Update gone wrong", date: new Date() },
//   { id: 4, message: "Meeting scheduled for next week", date: new Date(Date.now() - 86400000) },
//   { id: 5, message: "Task completed: Project Alpha", date: new Date(Date.now() - 86400000 * 2) },
//   { id: 6, message: "Vikram completed: Project Alpha", date: '2024-10-07T10:18:04.832Z' },
//   { id: 7, message: "James Doe favourited an item", date: new Date() },
//   { id: 8, message: "Sash added you to the group: UX Designers", date: new Date() },
//   { id: 9, message: "Sarah posted in the thread: Update gone wrong", date: new Date() },
//   { id: 10, message: "Meeting scheduled for next week", date: new Date(Date.now() - 86400000) },
//   { id: 11, message: "Task completed: Project Alpha", date: new Date(Date.now() - 86400000 * 2) },
//   { id: 12, message: "Vikram completed: Project Alpha", date: '2024-10-07T10:18:04.832Z' },

//   // Add more notifications if needed
// ];

// export default function Notification() {

//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleNotificationClick = (type) => {
//         // Navigate to the category page with the type
//         navigate(`/all-category/${type}`);
//         setIsOpen(false); // Close the notification panel after navigation
//       };
      
//   const [isOpen, setIsOpen] = useState(false);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     // Fetch notifications from the backend here
//     setNotifications(notificationsData); // Replace with actual API response
//   }, []);

//   useEffect(() => {
//     // Prevent background scroll when notification panel is open
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     // Cleanup on component unmount
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [isOpen]);

//   const toggleNotification = () => {
//     setIsOpen(!isOpen);
//   };

//   // Function to group notifications by date
//   const groupNotificationsByDate = (notifications) => {
//     const grouped = {
//       today: [],
//       yesterday: [],
//       older: [],
//     };

//     notifications.forEach((notification) => {
//       const notifDate = new Date(notification.date);

//       if (isToday(notifDate)) {
//         grouped.today.push(notification);
//       } else if (isYesterday(notifDate)) {
//         grouped.yesterday.push(notification);
//       } else {
//         grouped.older.push(notification);
//       }
//     });

//     return grouped;
//   };

//   const groupedNotifications = groupNotificationsByDate(notifications);

//   return (
//     <div className="relative">
//       {/* Notification Icon */}
//       <button
//         onClick={toggleNotification}
//         className="fixed top-1 right-1 z-50 p-1 rounded-full shadow-lg"
//       >
//         <span className="text-white">🔔</span>
//       </button>

//       {/* Overlay for background blur */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
//           onClick={toggleNotification}
//         />
//       )}

//       {/* Notification Panel */}
//       <div
//         className={`fixed top-0 right-0 w-80 h-screen bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-4 relative">
//           <h2 className="text-lg font-bold mb-4">Notifications</h2>

//           {/* Close Icon */}
//           <button
//             onClick={toggleNotification}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//           >
//             ✖
//           </button>

//           {/* Grouped Notifications */}
//           <div className="h-[calc(100vh-100px)] overflow-y-auto">
//             {/* Today’s Notifications */}
//             {groupedNotifications.today.length > 0 && (
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-2">Today</h3>
//                 {groupedNotifications.today.map((notif) => (
//                   <div
//                     key={notif.id}
//                     className="flex items-center p-2 bg-gray-100 rounded-lg shadow mb-2"
//                   >
//                     <span className="text-blue-500">💬</span>
//                     <div className="ml-2">
//                       <p className="text-sm font-semibold">{notif.message}</p>
//                       <p className="text-xs text-gray-500">{format(notif.date, "p")}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Yesterday’s Notifications */}
//             {groupedNotifications.yesterday.length > 0 && (
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-2">Yesterday</h3>
//                 {groupedNotifications.yesterday.map((notif) => (
//                   <div
//                     key={notif.id}
//                     className="flex items-center p-2 bg-gray-100 rounded-lg shadow mb-2"
//                   >
//                     <span className="text-green-500">👤</span>
//                     <div className="ml-2">
//                       <p className="text-sm font-semibold">{notif.message}</p>
//                       <p className="text-xs text-gray-500">{format(notif.date, "p")}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Older Notifications */}
//             {groupedNotifications.older.length > 0 && (
//               <div>
//                 <h3 className="font-semibold text-gray-700 mb-2">Older</h3>
//                 {groupedNotifications.older.map((notif) => (
//                   <div
//                     key={notif.id}
//                     className="flex items-center p-2 bg-gray-100 rounded-lg shadow mb-2"
//                   >
//                     <span className="text-gray-500">🗓️</span>
//                     <div className="ml-2">
//                       <p className="text-sm font-semibold">{notif.message}</p>
//                       <p className="text-xs text-gray-500">{format(notif.date, "PPP p")}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import { format, isToday, isYesterday } from "date-fns";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { IoMdNotifications } from "react-icons/io";
import axios from "axios";

const notificationsData = [
  { id: 1, message: "Check out our new rings!", date: new Date(), type: "rings" },
  { id: 2, message: "New earrings available!", date: new Date(), type: "earrings" },
  { id: 1, message: "James Doe favourited an item", date: new Date() },
    { id: 2, message: "Sash added you to the group: UX Designers", date: new Date() , type: "rings"},
    { id: 3, message: "Sarah posted in the thread: Update gone wrong", date: new Date(), type: "rings" },
    { id: 4, message: "Meeting scheduled for next week", date: new Date(Date.now() - 86400000) , type: "rings"},
    { id: 5, message: "Task completed: Project Alpha", date: new Date(Date.now() - 86400000 * 2), type: "rings" },
    { id: 6, message: "Vikram completed: Project Alpha", date: '2024-10-07T10:18:04.832Z', type: "rings" },
    { id: 7, message: "James Doe favourited an item", date: new Date(), type: "rings" },
    { id: 8, message: "Sash added you to the group: UX Designers", date: new Date(), type: "rings" },
    { id: 9, message: "Sarah posted in the thread: Update gone wrong", date: new Date() , type: "rings"},
    { id: 10, message: "Meeting scheduled for next week", date: new Date(Date.now() - 86400000), type: "rings" },
    { id: 11, message: "Task completed: Project Alpha", date: new Date(Date.now() - 86400000 * 2) , type: "rings"},
    { id: 12, message: "Vikram completed: Project Alpha", date: '2024-10-07T10:18:04.832Z', type: "rings" },
];

export default function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setNotifications(notificationsData); // Replace with actual API response
    getAllNotifications();
  }, []);


  const getAllNotifications = async()=>{
      const response = axios.get('/getallnotification');
      console.log('response for all notifications ',response)
  }


  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

  const handleNotificationClick = (type) => {
    // Navigate to the category page with the type
    navigate(`/all-category/${type}`);
    setIsOpen(false); // Close the notification panel after navigation
  };





  const groupNotificationsByDate = (notifications) => {
    const grouped = {
      today: [],
      yesterday: [],
      older: [],
    };

    notifications.forEach((notification) => {
      const notifDate = new Date(notification.date);
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
      <button onClick={toggleNotification} className="fixed top-2 right-1 z-50 p-2 rounded-full shadow-lg ">
      <IoMdNotifications className=""/>
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
                    <div key={notif.id} className="flex items-center p-2 bg-gray-100 rounded-lg shadow mb-2 cursor-pointer" onClick={() => handleNotificationClick(notif.type)}>
                      <span className="text-white">🔔</span>
                      <div className="ml-2">
                        <p className="text-sm font-semibold">{notif.message}</p>
                        <p className="text-xs text-gray-500">{format(notif.date, "p")}</p>
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
