import React, { useState } from 'react';
import './question.css';

// Assets
import { questionTopBanner } from '../../assets';
import { QUESTIONS } from '../../constants/questions';
import ProgressCircle from '../../components/progressCircle/ProgressCircle';

const Question = () => {
  const [questions, setQuestions] = useState(QUESTIONS);

  const getQuestions = () => {
    setQuestions(QUESTIONS);
  };

  return (
    <div className="question_screen_wrap">
      <div>
        <img
          src={questionTopBanner}
          alt="logo"
          className="question_screen_top_banner"
        />
      </div>

      <div className="question_screen_body">
        <ProgressCircle current={1} total={5} />
      </div>
    </div>
  );
};
export default Question;
