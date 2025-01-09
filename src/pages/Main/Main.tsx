import { Button, Stack } from '@chakra-ui/react';

import '@shared/styles/global.css';

export const Main = () => {
  return (
    <div>
      <Stack spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
    </div>
  );
};
