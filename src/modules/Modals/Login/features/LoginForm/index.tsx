import { useState } from 'react';

import { ModalSlice } from '@global/store/slices/modal.slice';
import { UserSlice } from '@global/store/slices/user.slice';

import { LoginSwitch } from '@modules/Modals/Login/features/LoginSwitch';

import { FormButton } from '@shared/components/FormButton';
import { SharedInput } from '@shared/components/SharedInput';
import { LoginTypes } from '@shared/enums/LoginTypes.enums';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';

import { Flex, InputGroup, InputRightElement } from '@chakra-ui/react';

export const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
  const [loginType, setLoginType] = useState<LoginTypes>(LoginTypes.Email);
  const dispatch = useTypedDispatch();

  const { setModalType } = ModalSlice.actions;
  const { setAuthStatus } = UserSlice.actions;

  const onSignInHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setAuthStatus(true));
    dispatch(setModalType(null));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => onSignInHandler(e)}>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="16px">
        <InputGroup width="100%">
          <SharedInput
            type={loginType === LoginTypes.Email ? 'email' : 'text'}
            name="username"
            placeholder={loginType === LoginTypes.Email ? 'Email' : 'Username'}
            value={userCredentials.username}
            onChange={onChangeHandler}
          />
          <InputRightElement>
            <LoginSwitch currentType={loginType} onSwitch={setLoginType} />
          </InputRightElement>
        </InputGroup>

        <SharedInput
          type="password"
          name="password"
          placeholder="Password"
          value={userCredentials.password}
          onChange={onChangeHandler}
        />
        <FormButton text="Sign In" />
      </Flex>
    </form>
  );
};
