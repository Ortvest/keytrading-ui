import { AppRoutes } from '@global/routes/AppRoutes';

import { Route } from '@shared/interfaces/Router.interfaces';

import { Main } from '@pages/Main/Main';
import { SignUpPage } from '@pages/Registration/SignUpPage';

export const allRoutes = (): Route[] => {
  const publicRoutes: Route[] = [
    {
      path: AppRoutes.MAIN,
      element: <Main />,
      exact: true,
      title: 'Main',
    },
    {
      path: AppRoutes.SIGN_UP,
      element: <SignUpPage />,
      exact: true,
      title: 'SignUpPage',
    },
  ];

  return [...publicRoutes];
};
