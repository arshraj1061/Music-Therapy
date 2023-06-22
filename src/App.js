import { Navigate, Route, Routes } from 'react-router-dom';
import HeaderIcons from './components/Header Icons/HeaderIcons';
import Beach from './components/Pages/Beach/Beach';
import BinauralBeats from './components/Pages/BinauralBeats/BinauralBeats';
import City from './components/Pages/City/City';
import Countryside from './components/Pages/Countryside/Countryside';
import Eastasia from './components/Pages/EastAsia/Eastasia';
import Forest from './components/Pages/Forest/Forest';
import Home from './components/Pages/Home/Home';
import Instrumental from './components/Pages/Instrumental/Instrumental';
import Park from './components/Pages/Park/Park';
import Underwater from './components/Pages/Underwater/Underwater';
import Raga from './components/Pages/Raga/Raga';
import Alpha from './components/Pages/BinauralBeats/Beats/Alpha';
import Beta from './components/Pages/BinauralBeats/Beats/Beta';
import Gamma from './components/Pages/BinauralBeats/Beats/Gamma';
import Delta from './components/Pages/BinauralBeats/Beats/Delta';
import Theta from './components/Pages/BinauralBeats/Beats/Theta';
import Welcome from './components/Pages/Welcome/Welcome';

function App() {
  return (
    <>
    <HeaderIcons/>
    <Routes>
      
      <Route path="/" element={<Welcome/>} />
      <Route path="/beach" element={<Beach/>} />
      <Route path="/forest" element={<Forest/>} />
      <Route path="/city" element={<City/>} />
      <Route path="/underwater" element={<Underwater/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/park" element={<Park/>} />
      <Route path="/countryside" element={<Countryside/>} />
      <Route path="/eastasia" element={<Eastasia/>} />
      <Route path="/instrumental" element={<Instrumental/>} />
      <Route path="/raga" element={<Raga/>} />
      <Route path="/binaural" element={<BinauralBeats/>} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/binaural/alpha" element={<Alpha/>} />
      <Route path="/binaural/beta" element={<Beta/>} />
      <Route path="/binaural/gamma" element={<Gamma/>} />
      <Route path="/binaural/delta" element={<Delta/>} />
      <Route path="/binaural/theta" element={<Theta/>} />

    </Routes>

    </>
  );
}

export default App;
