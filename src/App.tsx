import React from 'react';
import './App.css';
import { Sidebar } from './components/sidebar/sidebar.component';
import { StartPage } from './components/startPage/startPage.component';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <StartPage defaultClass='content-container'/>
    </div>
  );
}
export default App;
