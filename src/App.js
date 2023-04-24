import FooterIcons from './components/Icons/FooterIcons';
import Beach from './components/Pages/Beach/Beach';
import City from './components/Pages/City/City';
import Countryside from './components/Pages/Countryside/Countryside';
import Eastasia from './components/Pages/EastAsia/Eastasia';
import Forest from './components/Pages/Forest/Forest';
import Home from './components/Pages/Home/Home';
import Instrumental from './components/Pages/Instrumental/Instrumental';
import Park from './components/Pages/Park/Park';
import Underwater from './components/Pages/Underwater/Underwater';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Beach/>} />
      <Route path="/forest" element={<Forest/>} />
      <Route path="/city" element={<City/>} />
      <Route path="/underwater" element={<Underwater/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/park" element={<Park/>} />
      <Route path="/countryside" element={<Countryside/>} />
      <Route path="/eastasia" element={<Eastasia/>} />
      <Route path="/instrumental" element={<Instrumental/>} />
      <Route path="/binaural" element={<Forest/>} />
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>

    <FooterIcons/>
    </>
  );
}

export default App;
