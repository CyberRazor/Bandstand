
import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

import InstSynth from './pages/InstSynth';
import InstBass from './pages/InstBass'
import InstGuitar from './pages/InstGuitar'
import InstPercussion from './pages/InstPercussion'
import Header from './components/Header';
import Landing from './pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <main id="main" className='m-0 p-0 w-dvw flex flex-row'>
          <div id="contentWindow" className="flex-col w-dvw h-screen bg-gradient-to-b from-gray-200 via-gray-800 to-black"> 
            <Routes  className="flex flex-col bg-gray-700">
              <Route path="/" element={<Landing />}/>
              <Route path="/synth" element={<InstSynth />}/>
              <Route path="/guitar" element={<InstGuitar />}/>
              <Route path="/bass" element={<InstBass />}/>
              <Route path="/percussion" element={<InstPercussion />}/>
              <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
          </div>        
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
