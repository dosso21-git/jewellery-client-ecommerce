// PullToRefresh.jsx
import React, { useEffect, useState } from 'react';

const PullToRefresh = ({ fetchData, children }) => {
  const [startY, setStartY] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshHeight, setRefreshHeight] = useState(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const pullDistance = currentY - startY;

      if (pullDistance > 0) {
        setRefreshHeight(pullDistance); 
      }
    };
    const handleTouchEnd = async () => {
      if (refreshHeight > 100) { // Threshold for triggering refresh
        await refreshData();
      }
      // Reset height after a slight delay
      setTimeout(() => {
        setRefreshHeight(0);
      }, 200); // Delay to allow the message to be visible
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, refreshHeight]);

  const refreshData = async () => {
    setIsRefreshing(true);
    await fetchData(); // Call the fetchData function passed as a prop
    setIsRefreshing(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {refreshHeight > 0 && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: `${refreshHeight}px`,
          backgroundColor: 'lightgray',
          transition: 'height 0.2s ease',
        }}>
          {isRefreshing ? <p>Refreshing...</p> : <p>Pull to refresh...</p>}
        </div>
      )}
      <div style={{ marginTop: refreshHeight }}>
        {children}
      </div>
    </div>
  );
};

export default PullToRefresh;

