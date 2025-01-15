import { Button, Flex } from '@chakra-ui/react';

export const NavigationButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Flex justify="end">
      <Button w="65px" colorScheme="teal" onClick={onClick}>
        Next
      </Button>
    </Flex>
  );
};
