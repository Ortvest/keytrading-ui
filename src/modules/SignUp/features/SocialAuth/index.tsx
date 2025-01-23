import React from 'react';

import { Button, Divider, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';

export const SocialAuth: React.FC = () => {
  const inputBorder = useColorModeValue('gray.300', 'gray.600');

  return (
    <>
      <Flex align="center" gap="12px" marginBottom="24px">
        <Divider borderColor={inputBorder} />
        <Text fontSize="16px" color="gray.400">
          OR
        </Text>
        <Divider borderColor={inputBorder} />
      </Flex>
      <Flex>
        <Button
          w="full"
          variant="outline"
          borderColor={inputBorder}
          size="lg"
          borderRadius="12px"
          gap="12px"
          padding="12px 16px 12px 16px">
          <Image src="src/shared/icons/google.svg" boxSize="24px" alt="Logo" />
          Continue with Google
        </Button>
      </Flex>
    </>
  );
};
