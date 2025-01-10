import { UserData } from '@shared/interfaces/user.interface';

import { Avatar, WrapItem } from '@chakra-ui/react';

export const UserInfo = ({ username, avatar }: UserData) => (
  <WrapItem>
    <Avatar name={username} src={avatar} />
  </WrapItem>
);
