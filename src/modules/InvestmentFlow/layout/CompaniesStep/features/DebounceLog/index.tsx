import { useState } from 'react';

import { Input } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';

export const DebounceLog = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(inputValue, 500);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  console.log('Debounced Value:', debouncedValue);

  return (
    <>
      <Input
        type="text"
        name="companyName"
        value={inputValue}
        onChange={onChangeHandler}
        placeholder="Type company name"
        size="md"
        variant="outline"
        mb={4}
      />
    </>
  );
};
