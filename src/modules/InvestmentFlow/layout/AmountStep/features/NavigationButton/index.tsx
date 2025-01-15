import { Button, Flex } from '@chakra-ui/react';

interface NavigationButtonProps {
  onNextStepClickHandler?: () => void;
}

export const NavigationButton = ({ onNextStepClickHandler }: NavigationButtonProps) => {
  return (
    <Flex justify="end">
      <Button w="65px" colorScheme="teal" onClick={onNextStepClickHandler}>
        Next
      </Button>
    </Flex>
  );
};
