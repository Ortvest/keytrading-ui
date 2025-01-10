import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { Main } from '@pages/Main/Main';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <Main />
  </ChakraProvider>
);
