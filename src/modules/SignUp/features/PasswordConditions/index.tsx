import React from 'react';

import { PasswordConditionsProps } from '@shared/interfaces/PasswordConditionsProps.interfaces';

import { Flex, Image, Text } from '@chakra-ui/react';

export const PasswordConditions: React.FC<PasswordConditionsProps> = ({ conditions }) => {
  const renderCondition = (isMet: boolean, text: string) => (
    <Flex align="center">
      <Image
        src={isMet ? 'src/shared/icons/check-icon.svg' : 'src/shared/icons/uncheck-icon.svg'}
        alt="check-icon"
        boxSize="16px"
        mr="8px"
      />
      <Text fontSize="16px" color={isMet ? '#131337' : 'gray.400'}>
        {text}
      </Text>
    </Flex>
  );

  return (
    <Flex mb="16px" mt="8px" direction="column" gap="10px">
      {renderCondition(conditions.minLength, 'Minimum 8 characters')}
      {renderCondition(conditions.hasDigit, 'Minimum one digit (1, 2, 3...)')}
      {renderCondition(conditions.hasSpecialChar, 'Minimum one character (@, ?, %...)')}
    </Flex>
  );
};
