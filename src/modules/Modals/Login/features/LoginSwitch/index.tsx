import { LoginTypes } from '@shared/enums/LoginTypes.enums';
import SwitchImage from '@shared/images/ArrowsLeftRight.png';
import { LoginSwitchProps } from '@shared/interfaces/LoginSwitchProps.interfaces';

import { Button, Flex, Image } from '@chakra-ui/react';

export const LoginSwitch = ({ currentType, onSwitch }: LoginSwitchProps) => {
  const onToggleLoginTypeHandler = () => {
    const newType = currentType === LoginTypes.Email ? LoginTypes.Username : LoginTypes.Email;
    onSwitch(newType);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" width="100%">
      <Button
        onClick={onToggleLoginTypeHandler}
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
        <Image src={SwitchImage} alt="switch-login-type-img" width="18px" height="18px" />
      </Button>
    </Flex>
  );
};
