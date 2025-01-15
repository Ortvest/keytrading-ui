import { Button, Flex } from '@chakra-ui/react';

interface NavigationButtonProps {
  onNextClick: () => void;
}

export const NavigationButton = ({ onNextClick }: NavigationButtonProps) => {
  return (
    <Flex justify="end">
      <Button w="65px" colorScheme="teal" onClick={onNextClick}>
        Next
      </Button>
    </Flex>
  );
};
