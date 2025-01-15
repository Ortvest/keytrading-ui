import { LoginSwitchProps } from '@shared/interfaces/LoginSwitchProps.interface';

import { Button, Flex, Image } from '@chakra-ui/react';

export const LoginSwitch = ({ currentType, onSwitch }: LoginSwitchProps) => {
  const onToggleLoginType = () => {
    const newType = currentType === 'email' ? 'username' : 'email';
    onSwitch(newType);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" width="100%">
      <Button
        onClick={onToggleLoginType}
        background="transparent"
        height="32px"
        width="32px"
        padding="0"
        _hover={{
          transform: 'scale(1.1)',
          background: 'rgba(0, 0, 0, 0.05)',
        }}
        _active={{
          transform: 'scale(1.2)',
          background: 'rgba(0, 0, 0, 0.1)',
        }}
        transition="all 0.2s ease-in-out">
        <Image src="/images/ArrowsLeftRight.png" alt="Switch Login Type" width="32px" height="32px" />
      </Button>
    </Flex>
  );
};
