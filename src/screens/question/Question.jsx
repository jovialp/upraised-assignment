import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./question.css";

// Assets
import { questionTopBanner, arrowIcon } from "../../assets";

// Components
import TopBanner from "../../components/topBanner/TopBanner";
import ProgressCircle from "../../components/progressCircle/ProgressCircle";
import QuestionTitle from "../../components/questionTitle/QuestionTitle";
import Option from "../../components/option/Option";
import Button from "../../components/button/Button";
import QustionImage from "../../components/qustionImage/QustionImage";

// Context
import { AppContext } from "../../AppContext";

// Service
import postQuestionAnswerService from "../../services/postQuestionAnswerService";

const Question = () => {
  const [selectedOptionId, setSelectedOptionId] = useState();

  const {
    questions,
    totalQuestionCount,
    addOneToCorrectAnswerCount,
    addOneToIncorrectAnswerCount,
  } = useContext(AppContext);

  const params = useParams();

  const navigate = useNavigate();

  const currentQuestionNumber = params?.id ? parseInt(params?.id) : 0;
  const currentQuestionDetails = questions?.[currentQuestionNumber - 1];

  const onSelectOption = (id) => {
    setSelectedOptionId(id);
  };

  const onNextButtonClick = async () => {
    const response = await postQuestionAnswerService({
      questionId: currentQuestionDetails?.id,
      answerId: selectedOptionId,
    });

    if (response) {
      if (response.isCorrect) {
        addOneToCorrectAnswerCount();
      } else {
        addOneToIncorrectAnswerCount();
      }
      setSelectedOptionId();
      if (currentQuestionNumber < totalQuestionCount) {
        navigate(`/question/${currentQuestionNumber + 1}`, { replace: true });
      } else {
        navigate("/result", { replace: true });
      }
    }
  };

  useEffect(() => {
    if (totalQuestionCount === 0) {
      navigate("/", { replace: true });
    }
  }, [totalQuestionCount]);

  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner} />

      <div className="question_screen_body">
        <div className="question_progress_circle_wrap">
          <div className="question_progress_circle">
            <ProgressCircle current={currentQuestionNumber} total={5} />
          </div>
        </div>

        <QuestionTitle title={currentQuestionDetails?.question} />

        {currentQuestionDetails?.image ? (
          <QustionImage src={currentQuestionDetails.image} />
        ) : (
          ""
        )}

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

        <div className="next_button_wrap">
          <Button
            className="next_button"
            text={
              currentQuestionNumber < totalQuestionCount ? "Next" : "Submit"
            }
            action={onNextButtonClick}
            icon={arrowIcon}
            disabled={isNaN(selectedOptionId)}
          />
        </div>
      </div>
    </div>
  );
};
export default Question;
