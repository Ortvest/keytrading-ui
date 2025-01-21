import { UserHeaderData } from '@shared/interfaces/User.interfaces';

import { Avatar, WrapItem } from '@chakra-ui/react';

export const UserInfo = ({ username, avatar }: UserHeaderData) => (
  <WrapItem>
    <Avatar name={username} src={avatar} />
  </WrapItem>
);
