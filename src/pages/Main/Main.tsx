import { LoginModal } from '@modules/Modals/Login';
import { Header } from '@modules/Header';
        
import { Box, Button, Stack } from '@chakra-ui/react';

import '@shared/styles/global.css';

export const Main = () => {
  return (
     <>
      <Header />
      <Box background="#444444" minHeight="100vh">
        <LoginModal />
      </Box>
     </>
  );
};
