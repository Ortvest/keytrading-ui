import { NavigationButton } from '@modules/InvestmentFlow/layout/AmountStep/features/NavigationButton';
import { GoalsInvestment } from '@modules/InvestmentFlow/layout/GoalsStep/features/GoalsInvestment';
import { GoalsSelection } from '@modules/InvestmentFlow/layout/GoalsStep/features/GoalsSelection';

import { Box, Flex } from '@chakra-ui/react';

interface GoalsStepProps {
  onGoalsChangeHanlder: (selectedGoals: string[]) => void;
}

export const GoalsStep = ({ onGoalsChangeHanlder }: GoalsStepProps) => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p="20px" minH="100vh" bg="#f8f9fa">
        <Box bg="white" p="20px" borderRadius="md" boxShadow="md" maxW="400px" w="100%">
          <GoalsInvestment />
          <Flex direction="column" gap="12px">
            <GoalsSelection onGoalsChangeHanlder={onGoalsChangeHanlder} />
            <NavigationButton />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
