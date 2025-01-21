import { Button } from '@chakra-ui/react';

interface FromButtonProps {
  text: string;
}

export const FormButton = ({ text }: FromButtonProps) => {
  return (
    <Button type="submit" colorScheme="gray" width="114px" height="38px" borderRadius="6px" marginLeft="auto">
      {text}
    </Button>
  );
};
