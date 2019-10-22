import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ApplicationsTable from './components/ApplicationsTable';

function App() {
  return (
    <div>
      <Navbar />
      <ApplicationsTable />
    </div>
  );
}

export default App;
