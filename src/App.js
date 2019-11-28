import React from 'react';
import './App.css';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Profile from './componets/Profile';



const App = () => {
  return <div className='app-wrapper'>

      <Header />
      <Navbar />
      <Profile />

    </div>
}

export default App;
