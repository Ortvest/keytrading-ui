import { BrockChose } from '@modules/InvestmentFlow/layout/BrokersStep/features/BrockChoose';
import { RecommendBrok } from '@modules/InvestmentFlow/layout/BrokersStep/features/RecommendBrok';

import { Flex } from '@chakra-ui/react';

export const BrokerStep = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="#f8f9fa" direction="column">
      <RecommendBrok />
      <BrockChose />
    </Flex>
  );
};
