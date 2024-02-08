import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllPlayers from './Components/AllPlayers';
import SinglePlayer from './Components/SinglePlayer';
import Navigation from './Components/Navigation';
import NewPlayer from './Components/NewPlayer';
import Search from './Components/Search';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [searchedPlayers, setSearchedPlayers] = useState([]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<AllPlayers setAllPlayers={setAllPlayers} />} />
        <Route path='/players/:playerid' element={<SinglePlayer />} />
        <Route path='/newPlayer' element={<NewPlayer />} />
        <Route path='/search' element={<Search searchedPlayers={searchedPlayers} />} />
      </Routes>
    </>
  );
}

export default App;