import { Route } from '@shared/interfaces/Router.interfaces';

import { Main } from '@pages/Main/Main';

export const allRoutes = (): Route[] => {
  const publicRoutes: Route[] = [
    {
      path: '/',
      element: <Main />,
      exact: true,
      title: 'Main',
    },
  ];

  return [...publicRoutes];
};
