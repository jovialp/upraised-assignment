import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Style
import './result.css';

import { questionTopBanner } from '../../assets';

// Components
import TopBanner from '../../components/topBanner/TopBanner';
import SemiCircleGauge from '../../components/SemiCircleGauge/SemiCircleGauge';
import ResultOutput from '../../components/ResultOutput/ResultOutput';
import Button from '../../components/button/Button';

// Context
import { AppContext } from '../../AppContext';

const Result = () => {
  const navigate = useNavigate();

  const {
    resetContext,
    totalQuestionCount,
    correctAnswerCount,
    incorrectAnswerCount,
    ...state
  } = useContext(AppContext);

  const onStartAgainButtonClick = () => {
    resetContext();
  };

  useEffect(() => {
    if (totalQuestionCount === 0) {
      navigate('/', { replace: true });
    }
  }, [totalQuestionCount]);

  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner} />

      <div className="question_screen_body">
        <div className="result_head">Your result</div>

        <div className="result_meter_wrap">
          <SemiCircleGauge
            percentage={(correctAnswerCount / totalQuestionCount) * 100}
          />
        </div>

        <ResultOutput count={correctAnswerCount} isCorrect={true} />
        <ResultOutput count={incorrectAnswerCount} isCorrect={false} />

        <div className="result_button_wrap">
          <Button
            className="next_button"
            text={'Start Again'}
            action={onStartAgainButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
