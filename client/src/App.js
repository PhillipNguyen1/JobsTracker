import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserDashboard from './components/User-Dashboard';
import UpdateApp from './components/Update-Application';

function App() {
  return (
    <div>
      <Navbar />
      <UserDashboard 
      UpdateApp={<UpdateApp/>}
      />
    </div>
  );
}

export default App;
