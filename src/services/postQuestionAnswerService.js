// Dummy question data
import { ANSWERS } from '../constants/questions';

const postQuestionAnswerService = async ({ questionId, answerId }) => {
  // dummy api call
  return new Promise((resolve) =>
    setTimeout(
      resolve({
        isCorrect: ANSWERS.some(
          (ans) => ans.id === questionId && ans.answer === answerId
        ),
      }),
      300
    )
  );
};

export default postQuestionAnswerService;
