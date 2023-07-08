import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './home.css';

// Assets
import { logo } from '../../assets';
import { QUESTIONS } from '../../constants/questions';

// Components
import Button from '../../components/button/Button';

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

      <Button
        className="home_screen_start"
        text={'Start'}
        action={getQuestions}
      />
    </div>
  );
};
export default Home;
