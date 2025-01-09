import { Button } from '@chakra-ui/react';

import styles from './style.module.css';

interface GetStartedButtonProps {
  onClick: () => void;
}

const GetStartedButton = ({ onClick }: GetStartedButtonProps) => {
  return (
    <Button colorScheme="teal" variant="outline" className={styles.button} onClick={onClick}>
      Get Started
    </Button>
  );
};

export default GetStartedButton;
