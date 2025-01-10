import { Avatar, WrapItem } from '@chakra-ui/react';

interface UserInfoProps {
  username: string;
  avatar?: string;
}

export const UserInfo = ({ username, avatar }: UserInfoProps) => (
  <WrapItem>
    <Avatar name={username} src={avatar} />
  </WrapItem>
);
