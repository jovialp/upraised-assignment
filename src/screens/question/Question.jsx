import React, { useState } from 'react';
import './question.css';

// Assets
import { questionTopBanner } from '../../assets';
import { QUESTIONS } from '../../constants/questions';
import StepCount from '../../components/StepCount/StepCount';

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
        <StepCount current={1} total={5} />
      </div>
    </div>
  );
};
export default Question;
