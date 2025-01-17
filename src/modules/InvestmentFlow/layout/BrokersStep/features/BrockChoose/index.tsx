import { Flex, Image } from '@chakra-ui/react';

export const BrockChose = () => {
  const brokers = [
    { id: 'broker-1', image: '/images/FirstBroker.png' },
    { id: 'broker-2', image: '/images/SecondBroker.png' },
    { id: 'broker-3', image: '/images/ThirdBroker.png' },
  ];

  return (
    <Flex direction="column" justify="center" align="center" gap="20px" mt="20px">
      <Flex gap="20px">
        {brokers.map((broker) => (
          <Image key={broker.id} src={broker.image} alt={`Broker ${broker.id}`} boxSize="82px" borderRadius="50%" />
        ))}
      </Flex>
    </Flex>
  );
};
