import { Flex, Link } from '@chakra-ui/react';

export const RuleText = () => {
  return (
    <Flex
      mx="auto"
      fontWeight="600"
      w="344px"
      gap="64px"
      justify="center"
      fontSize="16px"
      color="131337"
      px="16px"
      py="24px">
      <Link>Privacy policy</Link>
      <Link>Terms of use</Link>
    </Flex>
  );
};
