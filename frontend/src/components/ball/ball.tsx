import React from 'react';

interface BallProps {
  onPositionChange: (position: { x: number; y: number }) => void;
}

const Ball: React.FC<BallProps> = ({ onPositionChange }) => {
  const ballStyle: React.CSSProperties = {
    width: '16px',
    height: '16px',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '2px solid #6e7379',
    position: 'absolute',
    top: '50%', // Adjust as needed for the fixed position
    left: '50%', // Adjust as needed for the fixed position
    transform: 'translate(-50%, -50%)',
    zIndex: 2, // Ensures the ball is above the dashed line
  };

  const updatePosition = () => {
    const newPosition = { x: 10, y: 20 };
    onPositionChange(newPosition);
  };

  return <div style={ballStyle} />;
};

export default Ball;
