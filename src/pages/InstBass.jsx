import React from 'react'
import AudioObject from '../components/AudioObject'

export default function InstBass() {
  return (
    <div className='w-50dvw h-screen justify-center bg-gradient-to-bl from-blue-200 via-blue-800 to-black'>
        <h1 className='underline font-semibold text-center p-12'>Welcome to Bass Club</h1>
        <div className='w-50dvw justify-center grid  gap-2 m-12 '>       
            <AudioObject className='bg-gray-200 rounded-full w-40'    objectName={'E'}    soundfileclick={'SynthBass_E.ogg'} volclick={0.5}/>
            <AudioObject className='bg-yellow-400 rounded-full w-40 '    objectName={'F'}    soundfileclick={'SynthBass_F.ogg'} volclick={0.5}/>
            <AudioObject className='bg-yellow-200 rounded-full w-40'   objectName={'F#'}   soundfileclick={'SynthBass_Fs.ogg'} volclick={0.5}/>
            <AudioObject className='bg-orange-400 rounded-full w-40'     objectName={'G'}    soundfileclick={'SynthBass_G.ogg'} volclick={0.5}/>
            <AudioObject className='bg-orange-200 rounded-full w-40'    objectName={'G#'}   soundfileclick={'SynthBass_Gs.ogg'} volclick={0.5}/>
            <AudioObject className='bg-red-400 rounded-full w-40'    objectName={'A'}    soundfileclick={'SynthBass_A.ogg'} volclick={0.5}/>
            <AudioObject className='bg-red-200 rounded-full w-40'   objectName={'A#'}   soundfileclick={'SynthBass_As.ogg'} volclick={0.5}/>
            <AudioObject className='bg-purple-400 rounded-full w-40'     objectName={'B'}    soundfileclick={'SynthBass_B.ogg'} volclick={0.5}/>
            <AudioObject className='bg-blue-400 rounded-full w-40'    objectName={'C'}    soundfileclick={'SynthBass_C.ogg'} volclick={0.5}/>
            <AudioObject className='bg-blue-200 rounded-full w-40'    objectName={'C#'}   soundfileclick={'SynthBass_Cs.ogg'} volclick={0.5}/>
            <AudioObject className='bg-green-400 rounded-full w-40'   objectName={'D'}    soundfileclick={'SynthBass_D.ogg'} volclick={0.5}/>
            <AudioObject className='bg-green-200 rounded-full w-40'     objectName={'D#'}   soundfileclick={'SynthBass_Ds.ogg'} volclick={0.5}/>
            <AudioObject className='bg-yellow-400 rounded-full w-40'  objectName={'E8ve'} soundfileclick={'SynthBass_E8ve.ogg'} volclick={0.5}/>
        </div>
    </div>
  )
}
