import { Link, Text } from '@chakra-ui/react';

interface AuthProposalProps {
  type: 'signin' | 'signup';
}
export const AuthProposal = ({ type }: AuthProposalProps) => {
  return (
    <>
      {type === 'signin' ? (
        <>
          <Text fontSize="16px" color="#131337A3" fontWeight="500" textAlign="center" mb="24px">
            Already have an account?{' '}
            <Link color="#0500ff" fontWeight="600">
              Sign In
            </Link>
          </Text>
        </>
      ) : (
        <>
          <Text fontSize="16px" color="#131337A3" fontWeight="500" textAlign="center" mb="24px">
            Already have an account?{' '}
            <Link color="#0500ff" fontWeight="600">
              Sign In
            </Link>
          </Text>
        </>
      )}
    </>
  );
};
