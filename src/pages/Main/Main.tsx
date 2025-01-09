import { LoginModal } from '@modules/Modals/Login';

import { Box } from '@chakra-ui/react';

import '@shared/styles/global.css';

export const Main = () => {
  return (
    <Box background="#444444" minHeight="100vh">
      <LoginModal />
    </Box>
  );
};
