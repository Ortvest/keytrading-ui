import { Header } from '@modules/Header';
import { AmountStep } from '@modules/InvestmentFlow/layout/AmountStep';
import { CompaniesStep } from '@modules/InvestmentFlow/layout/CompaniesStep';
import { GoalsStep } from '@modules/InvestmentFlow/layout/GoalsStep';
import { NumCompaniesStep } from '@modules/InvestmentFlow/layout/NumCompaniesStep';
import { LoginModal } from '@modules/Modals/Login';

import { Box } from '@chakra-ui/react';

import '@shared/styles/global.css';

export const Main = () => {
  return (
    <>
      <Header />
      <Box background="#444444" minHeight="100vh">
        <LoginModal />
      </Box>
      <AmountStep />
      <CompaniesStep />
      <NumCompaniesStep />
      <GoalsStep />
    </>
  );
};
