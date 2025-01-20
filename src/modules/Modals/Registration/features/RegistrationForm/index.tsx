import { useState } from 'react';

import { ModalSlice } from '@global/store/slices/modal.slice';
import { UserSlice } from '@global/store/slices/user.slice';

import { FormButton } from '@shared/components/FormButton';
import { SharedInput } from '@shared/components/SharedInput';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';
import { Country } from '@shared/interfaces/Countries.interfaces';
import { countries } from '@shared/mocks/Countries.mocks';

import { Flex, Select } from '@chakra-ui/react';

export const RegistrationForm = () => {
  const [userCredentials, setUserCredentials] = useState({ username: '', email: '', password: '', country: '' });
  const dispatch = useTypedDispatch();

  const { setModalType } = ModalSlice.actions;
  const { setAuthStatus } = UserSlice.actions;

  const onSignUpHandler = (): void => {
    dispatch(setAuthStatus(true));
    dispatch(setModalType(null));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setUserCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Flex direction="column" justifyContent="center" alignItems="center" gap="16px">
      <SharedInput
        type="text"
        name="username"
        placeholder="Username"
        value={userCredentials.username}
        onChange={onChangeHandler}
      />
      <SharedInput
        type="email"
        name="email"
        placeholder="Email"
        value={userCredentials.email}
        onChange={onChangeHandler}
      />

      <SharedInput
        type="password"
        name="password"
        placeholder="Password"
        value={userCredentials.password}
        onChange={onChangeHandler}
      />
      <Select
        onChange={onChangeHandler}
        name="country"
        borderRadius="8px"
        focusBorderColor="gray.300"
        placeholder="Your country"
        color="gray.500">
        {countries
          ? countries.map((country: Country, index: number) => (
              <option key={index} value={country.value}>
                {country.name}
              </option>
            ))
          : null}
      </Select>
      <FormButton onClick={onSignUpHandler} text="Sign Up" />
    </Flex>
  );
};
