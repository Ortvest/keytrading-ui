import { UserInfo } from '@modules/Header/layout/UserInfo';

import { UserHeaderData } from '@shared/interfaces/User.interfaces';

import { Flex, Text } from '@chakra-ui/react';

export const AuthedUserCard = ({ username, avatar }: UserHeaderData) => {
  return (
    <Flex align="center" boxShadow="sm" gap={3}>
      <UserInfo username={username} avatar={avatar} />
      <Text fontSize="md" fontWeight="semibold" color="black">
        {username}
      </Text>
    </Flex>
  );
};
