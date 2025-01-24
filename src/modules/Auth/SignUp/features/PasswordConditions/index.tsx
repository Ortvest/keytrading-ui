import CheckIcon from '@shared/icons/check-icon.svg';
import CloseIcon from '@shared/icons/uncheck-icon.svg';
import { PasswordConditionsProps } from '@shared/interfaces/PasswordConditionsProps.interfaces';

import { Flex, Image, Text } from '@chakra-ui/react';

export const PasswordConditions = ({ conditions }: PasswordConditionsProps) => {
  const conditionItems = [
    {
      isValid: conditions.minLength,
      label: 'Minimum 8 characters',
    },
    {
      isValid: conditions.hasDigit,
      label: 'Minimum one digit (1, 2, 3...)',
    },
    {
      isValid: conditions.hasSpecialChar,
      label: 'Minimum one character (@, ?, %...)',
    },
  ];

  return (
    <Flex mb="16px" mt="8px" direction="column" gap="10px">
      {conditionItems.map(({ isValid, label }, index) => (
        <Flex align="center" key={index}>
          <Image
            src={isValid ? CheckIcon : CloseIcon}
            alt={isValid ? 'Check icon' : 'Uncheck icon'}
            boxSize="16px"
            mr="8px"
          />
          <Text fontSize="16px" fontWeight="500" color={isValid ? '#131337' : '#1313377A'}>
            {label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
