import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './home.css';

// Assets
import { logo } from '../../assets';
import { QUESTIONS } from '../../constants/questions';

const Home = () => {
  const [questions, setQuestions] = useState();

  const getQuestions = () => {
    setQuestions(QUESTIONS);
  };

  return (
    <div className="home_screen_wrap">
      {questions?.length && <Navigate to="/question/1" replace={true} />}
      <img src={logo} alt="logo" className="home_screen_logo" />
      <div className="home_screen_body">
        <h2 className="home_screen_title">Quiz</h2>
      </div>
      <button className="home_screen_start" onClick={getQuestions}>
        Start
      </button>
    </div>
  );
};
export default Home;
