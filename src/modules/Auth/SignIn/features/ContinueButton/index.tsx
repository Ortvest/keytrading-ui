import { Button } from '@chakra-ui/react';

interface ContinueButtonProps {
  onClick: () => void;
}
export const ContinueButton = ({ onClick }: ContinueButtonProps) => {
  return (
    <Button
      width="344px"
      height="52px"
      bg="#0500FF"
      color="#FFFFFF"
      px={4}
      py={3}
      _hover={{ bg: '#0400CC' }}
      borderRadius="12px"
      onClick={onClick}>
      Continue
    </Button>
  );
};
