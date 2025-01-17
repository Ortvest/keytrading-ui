import { Box, Heading, Text } from '@chakra-ui/react';

export const NumberOfCompanies = () => {
  return (
    <Box textAlign="center" mb="20px">
      <Heading as="h2" fontSize="20px" color="teal.600">
        Number of companies you want to invest
      </Heading>
      <Text fontSize="14px" color="gray.500">
        5/5
      </Text>
    </Box>
  );
};
