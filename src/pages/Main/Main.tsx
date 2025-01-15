import { Header } from '@modules/Header';
import { Step1AmountInput } from '@modules/InvestmentFlow/components/Step1AmountInput';
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
      <Step1AmountInput />
    </>
  );
};
