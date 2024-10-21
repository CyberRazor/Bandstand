import React, { useState } from 'react';
import AudioObject from '../components/AudioObject';

export default function InstGuitar() {
  const [activeKey, setActiveKey] = useState(null);
  const [isDistorted, setIsDistorted] = useState(false);

  const toggleSound =() =>{
    setIsDistorted(!isDistorted);
  }

  const modeBgColor = isDistorted
  ? 'bg-gradient-to-bl from-red-200 via-red-800 to-black'
  : 'bg-gradient-to-bl from-yellow-200 via-yellow-900 to-white';

  const notes = {
    E:{
      clean: 'Gtr_Clean_LowE_E.ogg',
      distorted: 'Gtr_Distorted_LowE_E.ogg'
    },

    F:{
      clean: 'Gtr_Clean_LowE_F.ogg',
      distorted: 'Gtr_Distorted_LowE_F.ogg'
    },

    'F#':{
      clean: 'Gtr_Clean_LowE_Fs.ogg',
      distorted: 'Gtr_Distorted_LowE_Fs.ogg'
    },

    G:{
      clean: 'Gtr_Clean_LowE_G.ogg',
      distorted: 'Gtr_Distorted_LowE_G.ogg'
    },

    'G#':{
      clean: 'Gtr_Clean_LowE_Gs.ogg',
      distorted: 'Gtr_Distorted_LowE_Gs.ogg'
    },

    A:{
      clean: 'Gtr_Clean_LowE_A.ogg',
      distorted: 'Gtr_Distorted_LowE_A.ogg'
    },

    'A#':{
      clean: 'Gtr_Clean_LowE_As.ogg',
      distorted: 'Gtr_Distorted_LowE_As.ogg'
    },

    B:{
      clean: 'Gtr_Clean_LowE_B.ogg',
      distorted: 'Gtr_Distorted_LowE_B.ogg'
    },

    C:{
      clean: 'Gtr_Clean_LowE_C.ogg',
      distorted: 'Gtr_Distorted_LowE_C.ogg'
    },

    'C#':{
      clean: 'Gtr_Clean_LowE_Cs.ogg',
      distorted: 'Gtr_Distorted_LowE_Cs.ogg'
    },

    D:{
      clean: 'Gtr_Clean_LowE_D.ogg',
      distorted: 'Gtr_Distorted_LowE_D.ogg'
    },

    'D#':{
      clean: 'Gtr_Clean_LowE_Ds.ogg',
      distorted: 'Gtr_Distorted_LowE_Ds.ogg'
    },

    E8ve:{
      clean: 'Gtr_Clean_LowE_E8ve.ogg',
      distorted: 'Gtr_Distorted_LowE_E8ve.ogg'
    }
  }

  const selectKey = (key) => setActiveKey(key);

  const isNoteDisabled = (objectName) => {
    const major = ['F', 'G', 'A#', 'C', 'D']; 
    const minor = ['F', 'G#', 'A#', 'C#', 'D#']; 
    const pentatonic = ['F','F#','G#', 'A#', 'B', 'C#', 'D#']; 
    const phrygian = ['F#','G#', 'A#', 'C#', 'D']; 

    if (activeKey === 'Major') {
      return major.includes(objectName); // Disable sharps for the Major group
    } 
    else if (activeKey === 'Minor') {
      return minor.includes(objectName); // Disable notes not in the minor group
    }
    else if (activeKey === 'Pentatonic') {
        return pentatonic.includes(objectName); // Disable notes not in the minor group
      }
      else if (activeKey === 'Phrygian') {
        return phrygian.includes(objectName); // Disable notes not in the minor group
      }
    return false; // Enable all notes by default
  };

  return (
    <div className={`w-50dvw h-screen grid justify-center ${modeBgColor}`}>
      <h1 className='underline font-semibold text-center p-12'>Welcome to Guitar Club</h1>

      {/* Button to toggle clean/distorted sound */}
        <div className='text-center mb-8'>
        <button
          onClick={toggleSound}
          className='px-4 py-2 bg-blue-600 text-white rounded-md'>
          {isDistorted ? 'Switch to Clean Sound' : 'Switch to Distorted Sound'}
        </button>
      </div>

      {/* Buttons to select a scale */}
      <div className="flex justify-center mx-auto space-x-4 p-4">
        <button
          className={`bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded ${
            activeKey === 'Major' ? 'bg-green-500' : ''
          }`}
          onClick={() => selectKey('Major')}
        >
          Major Scale
        </button>
        <button
          className={`bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded ${
            activeKey === 'Minor' ? 'bg-green-500' : ''
          }`}
          onClick={() => selectKey('Minor')}
        >
          Minor
        </button>
        <button
          className={`bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded ${
            activeKey === 'Pentatonic' ? 'bg-green-500' : ''
          }`}
          onClick={() => selectKey('Pentatonic')}
        >
          Blues Scale
        </button>

        <button
          className={`bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded ${
            activeKey === 'Phrygian' ? 'bg-green-500' : ''
          }`}
          onClick={() => selectKey('Phrygian')}
        >
          Phrygian
        </button>
        <button
          className={`bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded ${
            activeKey === 'Chromatic' ? 'bg-green-500' : ''
          }`}
          onClick={() => selectKey('Chromatic')}
        >
          Chromatic Scale
        </button>
        <button
          className="bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={() => setActiveKey(null)}
        >
          Reset
        </button>
      </div>

      <div className='grid grid-cols-4 w-full m-20 p-10 justify-center' id='Octave'>
        <div className='w-full grid grid-cols-4 m-12 justify-center'>
          {renderAudioObject('E', isNoteDisabled('E'),  isDistorted ? notes.E.distorted : notes.E.clean)}
          {renderAudioObject('F', isNoteDisabled('F'),  isDistorted ? notes.F.distorted : notes.F.clean)}
          {renderAudioObject('F#', isNoteDisabled('F#'), isDistorted ? notes['F#'].distorted : notes['F#'].clean)}
          {renderAudioObject('G', isNoteDisabled('G'),  isDistorted ? notes.G.distorted : notes.G.clean)}
        </div>
        <div className='w-full grid grid-cols-4 m-12 justify-center'>
          {renderAudioObject('G#', isNoteDisabled('G#'), isDistorted ? notes['G#'].distorted : notes['G#'].clean)}
          {renderAudioObject('A', isNoteDisabled('A'),  isDistorted ? notes.A.distorted : notes.A.clean)}
          {renderAudioObject('A#', isNoteDisabled('A#'), isDistorted ? notes['A#'].distorted : notes['A#'].clean)}
          {renderAudioObject('B', isNoteDisabled('B'),  isDistorted ? notes.B.distorted : notes.B.clean)}
        </div>
        <div className='w-full grid grid-cols-5 m-12 justify-center'>
          {renderAudioObject('C', isNoteDisabled('C'), isDistorted ? notes.C.distorted : notes.C.clean)}
          {renderAudioObject('C#', isNoteDisabled('C#'), isDistorted ? notes['C#'].distorted : notes['C#'].clean)}
          {renderAudioObject('D', isNoteDisabled('D'),  isDistorted ? notes.D.distorted : notes.D.clean)}
          {renderAudioObject('D#', isNoteDisabled('D#'), isDistorted ? notes['D#'].distorted : notes['D#'].clean)}
          {renderAudioObject('E8ve', isNoteDisabled('E8ve'),  isDistorted ? notes.E8ve.distorted : notes.E8ve.clean)}
        </div>
        <div></div>
      </div>
    </div>
  );

  // Render function to apply disabled state and styles
  function renderAudioObject(objectName, isDisabled, soundFile) {
    return (
      <AudioObject
        className={`h-72 rounded-full w-auto transform transition duration-300 bg-white ${
          isDisabled ? 'bg-gray-600 cursor-not-allowed pointer-events-none opacity-50' : 'bg-gray-400 hover:bg-gray-200'
        }`}
        objectName={objectName}
        disabled={isDisabled}
        soundfileclick={isDisabled ? null : soundFile} // Disable click sound if disabled
        soundfilehover={'UI_ClickBeep.ogg'}
        volclick={0.5}
        volhover={0.2}
      />
    );
  }
}
