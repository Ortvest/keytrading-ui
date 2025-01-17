import { useState } from 'react';

import { Flex, IconButton, Image, Text } from '@chakra-ui/react';

export const BrockChose = () => {
  const [selectedBroker, setSelectedBroker] = useState<string | null>(null);

  const onHandleBrokerSelect = (brokerName: string) => {
    setSelectedBroker(brokerName);
    console.log(`You choose broker: ${brokerName}`);
  };

  return (
    <Flex direction="column" justify="center" align="center" gap="20px" mt="20px">
      <Flex gap="20px">
        <IconButton
          icon={<Image src="/images/FirstBroker.png" alt="Broker 1" boxSize="82px" borderRadius="50%" />}
          borderRadius="full"
          onClick={() => onHandleBrokerSelect('Broker 1')}
          aria-label="Broker 1"
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: '0 0 10px rgba(0, 128, 128, 0.6)',
            transition: 'all 0.2s ease-in-out',
          }}
          _active={{
            transform: 'scale(1.05)',
          }}
        />

        <IconButton
          icon={<Image src="/images/SecondBroker.png" alt="Broker 2" boxSize="82px" borderRadius="50%" />}
          borderRadius="full"
          onClick={() => onHandleBrokerSelect('Broker 2')}
          aria-label="Broker 2"
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: '0 0 10px rgba(0, 128, 128, 0.6)',
            transition: 'all 0.2s ease-in-out',
          }}
          _active={{
            transform: 'scale(1.05)',
          }}
        />

        <IconButton
          icon={<Image src="/images/ThirdBroker.png" alt="Broker 3" boxSize="82px" borderRadius="50%" />}
          borderRadius="full"
          onClick={() => onHandleBrokerSelect('Broker 3')}
          aria-label="Broker 3"
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: '0 0 10px rgba(0, 128, 128, 0.6)',
            transition: 'all 0.2s ease-in-out',
          }}
          _active={{
            transform: 'scale(1.05)',
          }}
        />
      </Flex>

      {selectedBroker && (
        <Text mt="20px" fontSize="xl" color="teal.500">
          You choose: {selectedBroker}
        </Text>
      )}
    </Flex>
  );
};
