// Assets
import { question_4 } from '../assets/questions';

const QUESTIONS = [
  {
    id: 1,
    question:
      'How do you judge what should be added in the next version of the app?',
    options: [
      'JavaScript is a scripting language used to make the website interactive',
      'JavaScript is an assembly language used to make the website interactive',
      'JavaScript is a compiled language used to make the website interactive',
      'None of the mentioned',
    ],
  },
  {
    id: 2,
    question: 'Which of the following is correct about JavaScript?',
    options: [
      'JavaScript is an Object-Based language',
      'JavaScript is Assembly-language',
      'JavaScript is an Object-Oriented language',
      'JavaScript is a High-level language',
    ],
  },
  {
    id: 3,
    question:
      'Among the given statements, which statement defines closures in JavaScript?',
    options: [
      'JavaScript is a function that is enclosed with references to its inner function scope',
      ' JavaScript is a function that is enclosed with references to its lexical environment',
      'JavaScript is a function that is enclosed with the object to its inner function scope',
      ' None of the mentioned',
    ],
  },
  {
    id: 4,
    question: 'What will be the output of the following JavaScript code?',
    options: ['10', '50', '5', 'Error'],
    image: question_4,
  },
  {
    id: 5,
    question:
      'Arrays in JavaScript are defined by which of the following statements?',
    options: [
      'It is an ordered list of values',
      'It is an ordered list of objects',
      'It is an ordered list of string',
      'It is an ordered list of functions',
    ],
  },
];

const ANSWERS = [
  { id: 1, answer: 0 },
  { id: 2, answer: 0 },
  { id: 3, answer: 1 },
  { id: 4, answer: 1 },
  { id: 5, answer: 0 },
];

export { QUESTIONS, ANSWERS };
