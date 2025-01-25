import { SignInForm } from '@modules/Auth/SignIn/features/SignInForm';

import { Box, Grid } from '@chakra-ui/react';

export const SignIn = () => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={4}
      maxW="1440px"
      mx="auto"
      px={6}
      h="100vh"
      alignItems="center"
      bg="white">
      <Box gridColumn="span 4" />

      <Box gridColumn="span 4">
        <SignInForm />
      </Box>

      <Box gridColumn="span 4" />
    </Grid>
  );
};
