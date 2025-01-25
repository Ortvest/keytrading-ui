import google from '@shared/icons/google.svg';

import { Box, Button, Image } from '@chakra-ui/react';

export const GoogleButton = () => {
  return (
    <Button
      width="344px"
      height="48px"
      bg="rgba(255, 255, 255, 0.16)"
      color="#131337"
      border="1px solid #13133729"
      px={4}
      py={3}
      fontSize="18px"
      fontWeight="600"
      _hover={{
        bg: 'rgba(255, 255, 255, 0.2)',
        borderColor: '#13133729',
      }}
      borderRadius="12px">
      <Box mr={3}>
        <Image src={google} boxSize="24px" alt="Logo" />
      </Box>
      Continue with Google
    </Button>
  );
};
