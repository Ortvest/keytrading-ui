import { CompaniesField } from '@modules/InvestmentFlow/layout/CompaniesStep/features/CompaniesField';
import { LikedCompanies } from '@modules/InvestmentFlow/layout/CompaniesStep/features/LikedCompanies';

import { NavigationButton } from '@shared/components/NavigationButton';

import { Box, Flex } from '@chakra-ui/react';

export const CompaniesStep = () => {
  const onNextStepHandler = () => {
    console.log('Next step clicked');
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="#f8f9fa">
      <Box background="#ffffff" width="100%" maxWidth="500px" padding="20px" borderRadius="12px" boxShadow="2xl">
        <LikedCompanies />
        <CompaniesField />
        <NavigationButton onNextStepClickHandler={onNextStepHandler} />
      </Box>
    </Flex>
  );
};
