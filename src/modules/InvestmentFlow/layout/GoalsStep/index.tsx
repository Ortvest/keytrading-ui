import { GoalsInvestment } from '@modules/InvestmentFlow/layout/GoalsStep/features/GoalsInvestment';
import { GoalsSelection } from '@modules/InvestmentFlow/layout/GoalsStep/features/GoalsSelection';

import { NavigationButton } from '@shared/components/NavigationButton';

import { Box, Flex } from '@chakra-ui/react';

export const GoalsStep = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p="20px" minH="100vh" bg="#f8f9fa">
        <Box bg="white" p="20px" borderRadius="md" boxShadow="md" maxW="400px" w="100%">
          <GoalsInvestment />
          <Flex direction="column" gap="12px">
            <GoalsSelection />
            <NavigationButton />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
