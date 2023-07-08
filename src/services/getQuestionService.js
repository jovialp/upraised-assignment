// Dummy question data
import { QUESTIONS } from '../constants/questions';

const getQuestionService = async () => {
  // dummy api call
  return new Promise((resolve) => setTimeout(resolve(QUESTIONS), 300));
};

export default getQuestionService;
