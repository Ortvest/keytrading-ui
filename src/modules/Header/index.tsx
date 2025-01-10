import { GetStartedButton } from '@modules/Header/features/GetStartedButton';

import { Box, Flex, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      w="100%"
      p="10px 20px"
      borderBottom="1px solid #ddd"
      bg="#f8f9fa">
      <Heading as="h1" color="teal.500" fontSize="24px">
        KeyTrading AI
      </Heading>
      <Box display="flex" alignItems="center">
        <GetStartedButton />
      </Box>
    </Flex>
  );
};
