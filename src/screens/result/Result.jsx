import React from 'react';
import { gaugeChart } from 'gauge-chart';

// Style
import './result.css';

import { questionTopBanner } from '../../assets';

// Components
import TopBanner from '../../components/topBanner/TopBanner';
import SemiCircleGauge from '../../components/SemiCircleGauge/SemiCircleGauge';
import ResultOutput from '../../components/ResultOutput/ResultOutput';
import Button from '../../components/button/Button';

const Result = () => {
  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner} />

      <div className="question_screen_body">
        <div className="result_head">Your result</div>

        {/* <SemiCircleGauge percentage={75} /> */}

        <div className="result_meter_wrap">
          <SemiCircleGauge percentage={75} />
        </div>

        <ResultOutput count={3} isCorrect={true} />
        <ResultOutput count={2} isCorrect={false} />

        
      <div className="result_button_wrap">
          <Button
            className="next_button"
            text={'Start Again'}
            action={}
          />
      </div>
      </div>
    </div>
  );
};

export default Result;
