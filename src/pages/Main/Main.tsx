import { Fragment } from 'react';

import { Header } from '@modules/Header';
import { Modals } from '@modules/Modals';

import '@shared/styles/global.css';

export const Main = () => {
  return (
    <Fragment>
      <Header />
      <Modals />
    </Fragment>
  );
};
