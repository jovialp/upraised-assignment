import React from 'react';
import './home.css';

// Assets
import { logo } from '../../assets';

const Home = () => {
  return (
    <div className="home_screen_wrap">
      <div className="home_screen_logo">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="home_screen_body">body</div>
      <div className="home_screen_start">start</div>
    </div>
  );
};
export default Home;
