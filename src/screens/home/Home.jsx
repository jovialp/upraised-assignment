import React from 'react';
import './home.css';

// Assets
import { logo } from '../../assets';

const Home = () => {
  return (
    <div className="home_screen_wrap">
      <img src={logo} alt="logo" className="home_screen_logo" />
      <div className="home_screen_body">
        <h2 className="home_screen_title">Quiz</h2>
      </div>
      <button className="home_screen_start">Start</button>
    </div>
  );
};
export default Home;
