import { AmountInputField } from '@modules/InvestmentFlow/components/Step1AmountInput/features/AmountInputField';
import { CurrencySelect } from '@modules/InvestmentFlow/components/Step1AmountInput/features/CurrencySelect';
import { InvestmentAmount } from '@modules/InvestmentFlow/components/Step1AmountInput/features/InvestmentAmount';
import { NavigationButton } from '@modules/InvestmentFlow/components/Step1AmountInput/features/NavigationButton';

import { Box, Flex } from '@chakra-ui/react';

export const Step1AmountInput = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p="20px" minH="100vh" bg="#f8f9fa">
        <Box bg="white" p="20px" borderRadius="md" boxShadow="md" maxW="400px" w="100%">
          <InvestmentAmount />
          <Flex direction="column" gap="12px">
            <AmountInputField />
            <CurrencySelect />
            <NavigationButton />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
