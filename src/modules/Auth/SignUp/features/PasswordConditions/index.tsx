import React from 'react';

import CheckIcon from '@shared/icons/check-icon.svg';
import CloseIcon from '@shared/icons/uncheck-icon.svg';
import { PasswordConditionsProps } from '@shared/interfaces/PasswordConditionsProps.interfaces';

import { Flex, Image, Text } from '@chakra-ui/react';

export const PasswordConditions: React.FC<PasswordConditionsProps> = ({ conditions }) => (
  <Flex mb="16px" mt="8px" direction="column" gap="10px">
    <Flex align="center">
      <Image
        src={conditions.minLength ? CheckIcon : CloseIcon}
        alt={conditions.minLength ? 'Check icon' : 'Uncheck icon'}
        boxSize="16px"
        mr="8px"
      />
      <Text fontSize="16px" fontWeight="500" color={conditions.minLength ? '#131337' : '#1313377A'}>
        Minimum 8 characters
      </Text>
    </Flex>
    <Flex align="center">
      <Image
        src={conditions.hasDigit ? CheckIcon : CloseIcon}
        alt={conditions.hasDigit ? 'Check icon' : 'Uncheck icon'}
        boxSize="16px"
        mr="8px"
      />
      <Text fontSize="16px" fontWeight="500" color={conditions.hasDigit ? '#131337' : '#1313377A'}>
        Minimum one digit (1, 2, 3...)
      </Text>
    </Flex>
    <Flex align="center">
      <Image
        src={conditions.hasSpecialChar ? CheckIcon : CloseIcon}
        alt={conditions.hasSpecialChar ? 'Check icon' : 'Uncheck icon'}
        boxSize="16px"
        mr="8px"
      />
      <Text fontSize="16px" fontWeight="500" color={conditions.hasSpecialChar ? '#131337' : 'gray.400'}>
        Minimum one character (@, ?, %...)
      </Text>
    </Flex>
  </Flex>
);
