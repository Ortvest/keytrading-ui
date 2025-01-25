import Logo from '@shared/icons/Logo.png';

import { Box, Center, Image, Text } from '@chakra-ui/react';

interface AuthHeaderProps {
  title: string;
}

export const AuthHeader = ({ title }: AuthHeaderProps) => {
  return (
    <Box>
      <Center marginBottom="96px">
        <Image src={Logo} boxSize="40px" alt="Logo" />
      </Center>
      <Text fontSize="32px" fontWeight="600" textAlign="center" mb="24px" color="131337">
        {title}
      </Text>
    </Box>
  );
};
