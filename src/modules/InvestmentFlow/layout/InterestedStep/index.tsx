import { NavigationButton } from '@modules/InvestmentFlow/layout/AmountStep/features/NavigationButton';
import { LikedSectors } from '@modules/InvestmentFlow/layout/InterestedStep/features/LikedSectors';
import { SectorsSelection } from '@modules/InvestmentFlow/layout/InterestedStep/features/SectorsSelection';

import { Box, Flex } from '@chakra-ui/react';

export const InterestedStep = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p="20px" minH="100vh" bg="#f8f9fa">
        <Box bg="white" p="20px" borderRadius="md" boxShadow="md" maxW="500px" w="100%">
          <LikedSectors />
          <Flex direction="column" gap="12px">
            <SectorsSelection />
            <NavigationButton />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
