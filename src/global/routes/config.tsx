import { AppRoutes } from '@global/routes/AppRoutes';

import { Route } from '@shared/interfaces/Router.interfaces';

import { SignInPage } from '@pages/Authorization/SignInPage';
import { Main } from '@pages/Main/Main';
import { SignUpPage } from '@pages/Registration/SignUpPage';

export const allRoutes = (): Route[] => {
  const publicRoutes: Route[] = [
    {
      path: AppRoutes.main,
      element: <Main />,
      exact: true,
      title: 'Main',
    },
    {
      path: AppRoutes.signUp,
      element: <SignUpPage />,
      exact: true,
      title: 'SignUpPage',
    },
    {
      path: AppRoutes.SIGNIN,
      element: <SignInPage />,
      exact: true,
      title: 'SignInPage',
    },
  ];

  return [...publicRoutes];
};
