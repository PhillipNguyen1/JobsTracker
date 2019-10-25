import React from 'react';
import './App.css';
import ApplicationsTable from './components/ApplicationsTable';
import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';

function App() {
  return (
    <div>
      <Navbar />
      <Tabbar/>
    </div>
  );
}

export default App;
