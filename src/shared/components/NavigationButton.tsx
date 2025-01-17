import { NavigationButtonProps } from '@shared/interfaces/NavigationButtonProps.interface';

import { Button, Flex } from '@chakra-ui/react';

export const NavigationButton = ({ onNextStepClickHandler }: NavigationButtonProps) => {
  return (
    <Flex justify="end">
      <Button w="65px" colorScheme="teal" onClick={onNextStepClickHandler}>
        Next
      </Button>
    </Flex>
  );
};
