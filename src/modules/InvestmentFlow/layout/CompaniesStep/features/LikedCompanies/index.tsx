import { Box, Heading, Text } from '@chakra-ui/react';

export const LikedCompanies = () => {
  return (
    <Box textAlign="center" mb="20px">
      <Heading as="h2" fontSize="20px" color="teal.600">
        Your liked companies
      </Heading>
      <Text fontSize="14px" color="gray.500">
        4/5
      </Text>
    </Box>
  );
};
