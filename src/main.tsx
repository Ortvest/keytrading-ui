import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { Main } from '@pages/Main/Main';

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <Main />
  </ChakraProvider>
);
