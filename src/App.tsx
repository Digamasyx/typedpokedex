import React from 'react';
import './App.css';
import { Sidebar, Overview, Berries, Locations, Games, Items, Machine} from './components/wrapper'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="flex">
      <Sidebar additionalClass={"data"}/>
      <Routes>
        <Route path='/' element={<Overview title='Overview' />} />
        <Route path='/berries/' element={<Berries title='Berries'/>} />
        <Route path='/locations/' element={<Locations title='Locations'/>} />
        <Route path='/games/' element={<Games title='Games'/>} />
        <Route path='/items/' element={<Items title='Items'/>} />
        <Route path='/machines/' element={<Machine title='Machines'/>} />
      </Routes>
    </div>
  );
}
export default App;
