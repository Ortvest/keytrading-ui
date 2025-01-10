import { UserInfo } from '@modules/Header/features/UserInfo';

import styles from './style.module.css';

interface AuthedUserCardProps {
  username: string;
  avatar: string;
}

export const AuthedUserCard = ({ username, avatar }: AuthedUserCardProps) => {
  return (
    <div className={styles.user}>
      <UserInfo username={username} avatar={avatar} />
      <p className={styles.username}>{username}</p>
    </div>
  );
};
