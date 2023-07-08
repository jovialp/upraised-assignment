import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './question.css';

// Assets
import { questionTopBanner } from '../../assets';
import { QUESTIONS } from '../../constants/questions';

// Components
import TopBanner from '../../components/topBanner/TopBanner';
import ProgressCircle from '../../components/progressCircle/ProgressCircle';
import QuestionTitle from '../../components/questionTitle/QuestionTitle';
import Option from '../../components/option/Option';

const Question = () => {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [selectedOptionId, setSelectedOptionId] = useState();

  const params = useParams();

  const currentQuestionNumber = params?.id ? parseInt(params?.id) : 0;
  const currentQuestionDetails = questions[currentQuestionNumber];

  const onSelectOption = (id) => {
    setSelectedOptionId(id);
  };

  return (
    <div className="question_screen_wrap">
      
      <TopBanner src={questionTopBanner} />

      <div className="question_screen_body">
        <div className="question_progress_circle_wrap">
          <div className="question_progress_circle">
            <ProgressCircle current={currentQuestionNumber} total={5} />
          </div>
        </div>
        
        <QuestionTitle title={currentQuestionDetails?.question} className={} />

        <div className="question_options">
          {currentQuestionDetails?.options?.map((option, id) => {
            return (
              <Option
                key={id}
                id={id}
                text={option}
                selected={id === selectedOptionId}
                onSelectAction={onSelectOption}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Question;
