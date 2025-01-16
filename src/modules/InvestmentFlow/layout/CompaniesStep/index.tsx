import { NavigationButton } from '@modules/InvestmentFlow/layout/AmountStep/features/NavigationButton';
import { CompaniesField } from '@modules/InvestmentFlow/layout/CompaniesStep/features/CompaniesField';
import { LikedCompanies } from '@modules/InvestmentFlow/layout/CompaniesStep/features/LikedCompanies';

import { Box, Flex } from '@chakra-ui/react';

export const CompaniesStep = () => {
  const onNextStepHandler = () => {
    console.log('Next step clicked');
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="rgba(0, 0, 0, 0.9)">
      <Box
        background="#ffffff"
        width="100%"
        maxWidth="500px" // Ограничим максимальную ширину
        padding="20px"
        borderRadius="12px"
        boxShadow="2xl">
        <LikedCompanies />
        <CompaniesField />
        <NavigationButton onNextStepClickHandler={onNextStepHandler} />
      </Box>
    </Flex>
  );
};
