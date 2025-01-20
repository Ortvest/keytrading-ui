import { useRoutes } from 'react-router-dom';

import { allRoutes } from './config';

export const AppRouter = () => {
  const appRoutes = allRoutes();

  return useRoutes(appRoutes);
};
