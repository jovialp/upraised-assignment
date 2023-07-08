import React from 'react';

import Home from './screens/home/Home';
import Question from './screens/question/Question';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/question/:id',
    element: <Question />,
  },
];

export default routes;
