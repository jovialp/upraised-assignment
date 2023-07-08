import React from 'react';

import Home from './screens/home/Home';
import Question from './screens/question/Question';
import Result from './screens/result/Result';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/question/:id',
    element: <Question />,
  },
  {
    path: '/result',
    element: <Result />,
  },
];

export default routes;
