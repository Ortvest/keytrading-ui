import { LoginForm } from '@modules/Modals/Login/features/LoginForm';

import { Box, Flex, Text } from '@chakra-ui/react';

export const LoginModal = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="rgba(0, 0, 0, 0.6)">
      <Box background="white" width="400px" padding="30px" borderRadius="12px" boxShadow="2xl">
        <Text fontSize="24px" fontWeight="bold" fontFamily="Inter, sans-serif" textAlign="center" marginBottom="16px">
          Sign In
        </Text>
        <LoginForm />
        <Flex direction="column" alignItems="flex-start" width="100%" paddingLeft="5px" gap="4px" marginTop="-45px">
          <Text fontSize="14px" color="gray.600">
            Don`t have an account?
          </Text>
          <Text
            as="a"
            href="#"
            fontSize="14px"
            fontWeight="semibold"
            color="blue.600"
            _hover={{ textDecoration: 'underline' }}>
            Sign up!
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
