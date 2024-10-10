import React from 'react';

const ConfirmBoxPopup = ({ onDeactivate, onCancel, title, description }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      backdropFilter: 'blur(5px)', // Blur effect
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999 // Ensure it is on top
    }}>
      <div style={{
        background: 'white',
        padding: '1.5rem', // Adjust as needed
        borderRadius: '0.5rem', // Rounded corners
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow
        maxWidth: '400px', // Limit width
        width: '100%' // Full width on small screens
      }}>
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 text-green-500 rounded-full p-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <div className="flex justify-between">
        <button
            className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={onDeactivate}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 rounded-md text-gray-600 bg-gray-200 hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default ConfirmBoxPopup;
