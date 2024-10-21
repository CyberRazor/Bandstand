import React, { useState } from 'react';
import AudioObject from '../components/AudioObject';

export default function InstPercussion() {
  const [clickedObject, setClickedObject] = useState(null);

  const handleObjectClick = (objectName) => {
    setClickedObject(objectName);
    // Reset after animation duration (e.g., 300ms)
    setTimeout(() => setClickedObject(null), 300);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-bl from-orange-200 via-orange-800 to-black">
      <h1 className="underline font-semibold text-center p-12 text-white">
        Welcome to Percussion Club
      </h1>

      {/* Drumkit layout */}
      <div
        className="grid grid-rows-4 grid-cols-6 gap-y-12 mt-8"
        style={{ width: '80%', height: '60%' }}
      >
        {/* Cymbals and toms on the top row */}
        <div></div>
        <AudioObject
          className={`bg-orange-400 rounded-full w-40 h-40 border-2 border-gray-400 transition-transform duration-300 transform ${
            clickedObject === 'Crash' ? 'scale-110 opacity-90 border-4' : ''
          }`}
          objectName={'Crash'}
          soundfilehover={'Ui_padhover_01.ogg'}
          soundfileclick={'Drums_Crash.ogg'}
          volclick={0.5}
          onClick={() => handleObjectClick('Crash')}
        />

        <div></div>
        <div></div>
        <AudioObject
          className={`bg-orange-400 rounded-full w-40 h-40 border-2 border-gray-400 transition-transform duration-300 transform ${
            clickedObject === 'Ride' ? 'scale-110 opacity-90 border-4' : ''
          }`}
          objectName={'Ride'}
          soundfilehover={'Ui_padhover_01.ogg'}
          soundfileclick={'Drums_Ride.ogg'}
          volclick={0.5}
          onClick={() => handleObjectClick('Ride')}
        />

        <div></div>

        {/* Toms in the middle row */}
        <div></div>
        <div></div>
        <AudioObject
          className={`bg-green-400 rounded-full w-40 h-40 border-2 border-gray-400 transition-transform duration-300 transform ${
            clickedObject === 'High Tom' ? 'scale-110 opacity-90 border-4' : ''
          }`}
          objectName={'High Tom'}
          soundfilehover={'Ui_padhover_01.ogg'}
          soundfileclick={'Drums_HighTom.ogg'}
          volclick={0.5}
          onClick={() => handleObjectClick('High Tom')}
        />

        <AudioObject
          className={`bg-green-600 rounded-full w-40 h-40 border-2 border-gray-400 transition-transform duration-300 transform ${
            clickedObject === 'Mid Tom' ? 'scale-110 opacity-90 border-4' : ''
          }`}
          objectName={'Mid Tom'}
          soundfilehover={'Ui_padhover_01.ogg'}
          soundfileclick={'Drums_MidTom.ogg'}
          volclick={0.5}
          onClick={() => handleObjectClick('Mid Tom')}
        />

        <div></div>
        <div></div>

        {/* Kick drum and snare with hi-hats */}
        <div className="flex flex-col">
          <AudioObject
            className={`bg-yellow-600 rounded-full w-45 h-40 mt-4 border-2 border-gray-400 transition-transform duration-300 transform ${
              clickedObject === 'Hi-Hat open' ? 'scale-110 opacity-90 border-4' : ''
            }`}
            objectName={'Hi-Hat open'}
            soundfilehover={'Ui_padhover_01.ogg'}
            soundfileclick={'Drums_HiHatOpen.ogg'}
            volclick={0.5}
            onClick={() => handleObjectClick('Hi-Hat open')}
          />
          <AudioObject
            className={`bg-yellow-400 rounded-full w-45 h-40 mt-4 border-2 border-gray-400 transition-transform duration-300 transform ${
              clickedObject === 'Hi-Hat closed' ? 'scale-110 opacity-90 border-4' : ''
            }`}
            objectName={'Hi-Hat closed'}
            soundfilehover={'Ui_padhover_01.ogg'}
            soundfileclick={'Drums_HiHatClosed.ogg'}
            volclick={0.5}
            onClick={() => handleObjectClick('Hi-Hat closed')}
          />
        </div>

        <AudioObject
          className={`bg-blue-400 rounded-full w-56 h-56 m-2 border-2 border-gray-400 transition-transform duration-300 transform ${
            clickedObject === 'Snare' ? 'scale-110 opacity-90 bg-blue-200 border-4' : ''
          }`}
          objectName={'Snare'}
          soundfilehover={'Ui_padhover_01.ogg'}
          soundfileclick={'Drums_Snare.ogg'}
          volclick={0.5}
          onClick={() => handleObjectClick('Snare')}
        />

        <div></div>

        <AudioObject
          className={`bg-green-800 rounded-full w-52 h-52 m-2 border-2 border-gray-400 transition-transform duration-300 transform ${
            clickedObject === 'Low Tom' ? 'scale-110 opacity-90 border-4 bg-green-300' : ''
          }`}
          objectName={'Low Tom'}
          soundfilehover={'Ui_padhover_01.ogg'}
          soundfileclick={'Drums_LowTom.ogg'}
          volclick={0.5}
          onClick={() => handleObjectClick('Low Tom')}
        />

        <div></div>
        <div></div>

        {/* Kick drum */}
        <div></div>
        <div></div>
        <AudioObject
          className={`bg-gray-600 rounded-full w-64 h-64 m-2 border-2 border-gray-400 transition-transform duration-300 transform 
            ${clickedObject === 'Kick' ? 'scale-110 opacity-90 border-4' : ''}`}
          objectName={'Kick'}
          soundfilehover={'Ui_padhover_01.ogg'}
          soundfileclick={'Drums_Kick.ogg'}
          volclick={0.5}
          onClick={() => handleObjectClick('Kick')}
        />

        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
