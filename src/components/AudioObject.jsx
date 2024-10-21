import React from 'react';

const playSound = (soundUrl, volume = 1.0) => {
    const audio = new Audio(soundUrl);
    audio.volume = volume;
    audio.play();
};

export default function AudioObject({ className, objectName, soundfilehover, soundfileclick, volhover = 1.0, volclick = 1.0, onClick }) {
  const basePath = '/audio/';
  
  return (
    <div 
      className={className}
      // First, trigger the passed onClick (for scaling), then play sound
      onClick={() => {
        if (onClick) onClick();  // Trigger the parent's click event for animation
        playSound(`${basePath}${soundfileclick}`, volclick); // Play the sound after
      }}
    >
      <h3 className='text-center font-semibold align-middle'>{objectName}</h3>
    </div>
  );
}
