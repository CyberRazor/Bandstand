import React, { useState } from 'react';
import AudioObject from '../components/AudioObject';

export default function InstSynth() {
  const [activeKey, setActiveKey] = useState(null);

  const selectKey = (key) => setActiveKey(key);

  const isNoteDisabled = (objectName) => {
    const major = ['C#', 'D#', 'F#', 'G#', 'A#']; 
    const minor = ['C#', 'E', 'F#', 'G#', 'B']; 
    const pentatonic = ['C#','D','E', 'F#', 'G#', 'A', 'B']; 
    const phrygian = ['D','E', 'F#', 'G#', 'A#']; 

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
    <div className='w-50dvw h-screen grid justify-center bg-gradient-to-bl from-purple-200 via-purple-800 to-black'>
      <h1 className='underline font-semibold text-center p-12'>Welcome to Synth Club</h1>

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

      <div className='grid grid-cols-3 m-20 p-10 justify-center' id='Octave'>
        <div className='w-full grid grid-cols-4 m-12 justify-center'>
          {renderAudioObject('C', isNoteDisabled('C'), 'ui_synthnote_C.ogg')}
          {renderAudioObject('C#', isNoteDisabled('C#'), 'ui_synthnote_Cs.ogg')}
          {renderAudioObject('D', isNoteDisabled('D'), 'ui_synthnote_D.ogg')}
          {renderAudioObject('D#', isNoteDisabled('D#'), 'ui_synthnote_Ds.ogg')}
        </div>
        <div className='w-full grid grid-cols-4 m-12 justify-center'>
          {renderAudioObject('E', isNoteDisabled('E'), 'ui_synthnote_E.ogg')}
          {renderAudioObject('F', isNoteDisabled('F'), 'ui_synthnote_F.ogg')}
          {renderAudioObject('F#', isNoteDisabled('F#'), 'ui_synthnote_Fs.ogg')}
          {renderAudioObject('G', isNoteDisabled('G'), 'ui_synthnote_G.ogg')}
        </div>
        <div className='w-full grid grid-cols-5 m-12 justify-center'>
          {renderAudioObject('G#', isNoteDisabled('G#'), 'ui_synthnote_Gs.ogg')}
          {renderAudioObject('A', isNoteDisabled('A'), 'ui_synthnote_A.ogg')}
          {renderAudioObject('A#', isNoteDisabled('A#'), 'ui_synthnote_As.ogg')}
          {renderAudioObject('B', isNoteDisabled('B'), 'ui_synthnote_B.ogg')}
          {renderAudioObject('C8ve', isNoteDisabled('C8ve'), 'ui_synthnote_C_8ve.ogg')}
        </div>
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
        volclick={1}
        volhover={0.2}
      />
    );
  }
}
