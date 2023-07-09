import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

// Assets
import { logo } from "../../assets";
import getQuestionService from "../../services/getQuestionService";

// Components
import Button from "../../components/button/Button";

// Context
import { AppContext } from "../../AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { setQuestions, setTotalQuestionCount, ...state } =
    useContext(AppContext);

  const getQuestions = async () => {
    const responseData = await getQuestionService();

    setQuestions(responseData);
    setTotalQuestionCount(responseData?.length || 0);

    if (responseData?.length > 0) {
      navigate("/question/1", { replace: true });
    }
  };

  return (
    <div className="home_screen_wrap">
      <img src={logo} alt="logo" className="home_screen_logo" />
      <div className="home_screen_body">
        <h2 className="home_screen_title">Quiz</h2>
      </div>

      <Button
        className="home_screen_start"
        text={"Start"}
        action={getQuestions}
      />
    </div>
  );
};
export default Home;
