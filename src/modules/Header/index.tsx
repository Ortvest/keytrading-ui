import { GetStartedButton } from '@modules/Header/features/GetStartedButton';

import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>KeyTrading AI</h1>
      <div className={styles.info}>
        <GetStartedButton />
      </div>
    </header>
  );
}

export default Header;
