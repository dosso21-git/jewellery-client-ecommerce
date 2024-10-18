


import React, { useEffect, useState } from 'react';
import { Alert } from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AlertCustomStyles({ visible, setVisible, message }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setVisible(false);
            return 0;
          }
          return prev + (100 / 30); // Adjust for duration (3s)
        });
      }, 100); // Update every 100ms
      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <div className=''>
      {visible && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4"
          style={{ width: '300px', height: '50px', zIndex: 40 }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '4px',
              backgroundColor: 'green',
              width: `${progress}%`,
              transition: 'width 0.1s linear',
            }}
          />
          <Alert
            icon={<Icon />}
            className="rounded-none border-l-4 border-[#2ec946] bg-[#ffffff] font-medium text-[#2ec946] relative h-full"
          >
            {message}
          </Alert>
        </div>
      )}
    </div>

  );
}