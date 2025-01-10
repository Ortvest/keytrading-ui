import { UserInfo } from '@modules/Header/features/UserInfo';

import { UserData } from '@shared/interfaces/user.interface';

import { Flex, Text } from '@chakra-ui/react';

export const AuthedUserCard = ({ username, avatar }: UserData) => {
  return (
    <Flex align="center" boxShadow="sm" gap={3}>
      <UserInfo username={username} avatar={avatar} />
      <Text fontSize="md" fontWeight="semibold" color="black">
        {username}
      </Text>
    </Flex>
  );
};
