import { DefaultContext } from '../AppContext';

export const getInitialContextValues = () => {
  const initialContext = { ...DefaultContext };

  return initialContext;
};
