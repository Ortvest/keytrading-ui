import { Input } from '@chakra-ui/react';

export const AmountInputField = ({ onChange }: { onChange?: () => void }) => {
  return (
    <Input
      placeholder="Enter the amount you plan to invest"
      type="number"
      focusBorderColor="gray.300"
      onChange={onChange}
    />
  );
};
