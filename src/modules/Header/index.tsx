import { useState } from 'react';

import GetStartedButton from '@modules/Header/features/GetStartedButton/GetStartedButton';
import UserInfo from '@modules/Header/features/UserInfo/UserInfo';

import styles from './style.module.css';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const username = 'МaxDach';
  const avatar = '';

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>KeyTrading AI</h1>
      <div className={styles.rightsection}>
        {isAuthenticated ? (
          <div className={styles.userinfo}>
            <UserInfo username={username} avatar={avatar} />
            <span className={styles.username}>{username}</span>
          </div>
        ) : (
          <GetStartedButton onClick={handleLogin} />
        )}
      </div>
    </header>
  );
}

export default Header;
