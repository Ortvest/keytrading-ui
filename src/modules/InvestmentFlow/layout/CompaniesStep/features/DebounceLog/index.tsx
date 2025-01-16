import { useState } from 'react';

import { Input } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';

export const DebounceLog = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [debouncedValue] = useDebounce(inputValue, 500);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  console.log('Debounced Value:', debouncedValue);

  return (
    <div>
      <Input
        type="text"
        value={inputValue}
        onChange={onChangeHandler}
        placeholder="Type company name"
        size="md"
        variant="outline"
        mb={4}
      />
    </div>
  );
};
