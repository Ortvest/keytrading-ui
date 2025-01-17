import { useState } from 'react';

import { Flex, IconButton, Image, Text } from '@chakra-ui/react';

export const BrockChose = () => {
  const [selectedBroker, setSelectedBroker] = useState<{ id: string; name: string } | null>(null);

  const brokers = [
    { id: 'broker-1', name: 'Broker 1', image: '/images/FirstBroker.png' },
    { id: 'broker-2', name: 'Broker 2', image: '/images/SecondBroker.png' },
    { id: 'broker-3', name: 'Broker 3', image: '/images/ThirdBroker.png' },
  ];

  const onHandleBrokerSelect = (broker: { id: string; name: string }) => {
    setSelectedBroker(broker);
    console.log(`You chose broker: ${broker.name}`);
  };

  return (
    <Flex direction="column" justify="center" align="center" gap="20px" mt="20px">
      <Flex gap="20px">
        {brokers.map((broker) => (
          <IconButton
            key={broker.id}
            icon={<Image src={broker.image} alt={broker.name} boxSize="82px" borderRadius="50%" />}
            borderRadius="full"
            onClick={() => onHandleBrokerSelect(broker)}
            aria-label={broker.name}
            _hover={{
              transform: 'scale(1.1)',
              boxShadow: '0 0 10px rgba(0, 128, 128, 0.6)',
              transition: 'all 0.2s ease-in-out',
            }}
            _active={{
              transform: 'scale(1.05)',
            }}
          />
        ))}
      </Flex>

      {selectedBroker && (
        <Text mt="20px" fontSize="xl" color="teal.500">
          You chose: {selectedBroker.name}
        </Text>
      )}
    </Flex>
  );
};
