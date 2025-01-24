import React from 'react';

import google from '@shared/icons/google.svg';

import { Button, Divider, Flex, Image, Text } from '@chakra-ui/react';

export const SocialAuth: React.FC = () => {
  return (
    <>
      <Flex align="center" gap="12px" marginBottom="24px">
        <Divider borderColor="#13133729" />
        <Text fontSize="16px" fontWeight="500" color="#13133752">
          OR
        </Text>
        <Divider borderColor="#13133729" />
      </Flex>
      <Flex>
        <Button
          w="full"
          variant="outline"
          borderColor="#13133729"
          size="lg"
          borderRadius="12px"
          gap="12px"
          padding="12px 16px 12px 16px">
          <Image src={google} boxSize="24px" alt="Logo" />
          Continue with Google
        </Button>
      </Flex>
    </>
  );
};
