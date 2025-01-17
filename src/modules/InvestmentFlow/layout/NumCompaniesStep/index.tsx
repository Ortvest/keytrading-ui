import { useState } from 'react';

import { CountField } from '@modules/InvestmentFlow/layout/NumCompaniesStep/features/CountField';
import { NumberOfCompanies } from '@modules/InvestmentFlow/layout/NumCompaniesStep/features/NumberofCompanies';

import { NavigationButton } from '@shared/components/NavigationButton';

import { Box, Flex } from '@chakra-ui/react';

export const NumCompaniesStep = () => {
  const [selectedCount, setSelectedCount] = useState('');

  const onSelectChangeHandler = (value: string): void => {
    setSelectedCount(value);
  };

  const onNextStepClickHandler = (): void => {
    if (!selectedCount) {
      alert('Please select how many companies you want to invest in.');
    } else {
      console.log('Selected companies range:', selectedCount);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="#f8f9fa">
      <Box background="#ffffff" width="100%" maxWidth="500px" padding="20px" borderRadius="12px" boxShadow="2xl">
        <NumberOfCompanies />
        <CountField onChange={onSelectChangeHandler} />
        <NavigationButton onNextStepClickHandler={onNextStepClickHandler} />
      </Box>
    </Flex>
  );
};
