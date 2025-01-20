import { Button } from '@chakra-ui/react';

interface FromButtonProps {
  onClick: () => void;
  text: string;
}

export const FormButton = ({ onClick, text }: FromButtonProps) => {
  return (
    <Button colorScheme="gray" width="114px" height="38px" borderRadius="6px" marginLeft="auto" onClick={onClick}>
      {text}
    </Button>
  );
};
