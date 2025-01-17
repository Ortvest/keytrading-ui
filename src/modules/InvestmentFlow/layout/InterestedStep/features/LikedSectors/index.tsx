import { Box, Heading, Text } from '@chakra-ui/react';

export const LikedSectors = () => {
  return (
    <Box textAlign="center" mb="20px">
      <Heading as="h2" fontSize="20px" color="teal.600">
        Your liked sectors
      </Heading>
      <Text fontSize="14px" color="gray.500">
        3/5
      </Text>
    </Box>
  );
};
