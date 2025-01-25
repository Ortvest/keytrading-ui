import { Link } from '@chakra-ui/react';

interface GoBackLinkProps {
  onClick: () => void;
}

export const GoBackLink = ({ onClick }: GoBackLinkProps) => {
  return (
    <Link width="64px" height="20px" fontSize="16px" fontWeight="600" color="#0500FF" onClick={onClick}>
      Go Back
    </Link>
  );
};
