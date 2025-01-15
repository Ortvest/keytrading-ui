import { Box, Heading, Text } from '@chakra-ui/react';

export const InvestmentAmount = () => {
  return (
    <Box textAlign="center" mb="20px">
      <Heading as="h2" fontSize="20px" color="teal.600">
        Investment amount
      </Heading>
      <Text fontSize="14px" color="gray.500">
        1/5
      </Text>
    </Box>
  );
};
