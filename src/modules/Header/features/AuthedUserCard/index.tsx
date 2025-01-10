import { UserInfo } from '@modules/Header/features/UserInfo';

import { Flex, Text } from '@chakra-ui/react';

interface AuthedUserCardProps {
  username: string;
  avatar: string;
}

export const AuthedUserCard = ({ username, avatar }: AuthedUserCardProps) => {
  return (
    <Flex align="center" boxShadow="sm" gap={3}>
      <UserInfo username={username} avatar={avatar} />
      <Text fontSize="md" fontWeight="semibold" color="black">
        {username}
      </Text>
    </Flex>
  );
};
