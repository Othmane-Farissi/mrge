import React from 'react';

interface BarProps {
  left?: boolean;
}

const Bar: React.FC<{ left?: boolean }> = ({ left }) => {
  const barStyle: React.CSSProperties = {
    width: '8px',
    height: '80px',
    backgroundColor: 'white',
    border: '2px solid #6e7379',
    borderRadius: '10px',
    position: 'absolute',
    top: '50%', // Keep the bars vertically centered
    transform: 'translateY(-50%)', // Center the bars vertically
    left: left ? '0' : 'unset', // Position left bar at the extreme left
    right: left ? 'unset' : '0', // Position right bar at the extreme right
  };

  return <div style={barStyle} />;
};

export default Bar;
