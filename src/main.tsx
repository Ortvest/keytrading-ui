import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from '@global/routes/AppRouter';
import { store } from '@global/store';

import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <Router>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Router>
  </ChakraProvider>
);
