import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@global/routes/AppRoutes';

import { Link, Text } from '@chakra-ui/react';

interface AuthProposalProps {
  type: 'signin' | 'signup' | 'showPasswordInput';
}

export const AuthProposal = ({ type }: AuthProposalProps) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (type === 'signin') {
      navigate(AppRoutes.signUp);
    } else {
      navigate(AppRoutes.SIGNIN);
    }
  };

  return (
    <>
      {type === 'signin' ? (
        <Text fontSize="16px" color="#131337A3" fontWeight="500" textAlign="center" mb="24px">
          You don`t have an account?{' '}
          <Link color="#0500ff" fontWeight="600" onClick={handleNavigation}>
            Sign Up
          </Link>
        </Text>
      ) : type === 'signup' ? (
        <Text fontSize="16px" color="#131337A3" fontWeight="500" textAlign="center" mb="24px">
          Already have an account?{' '}
          <Link color="#0500ff" fontWeight="600" onClick={handleNavigation}>
            Sign In
          </Link>
        </Text>
      ) : type === 'showPasswordInput' ? (
        <Text fontSize="16px" color="#131337A3" fontWeight="500" textAlign="center" mb="24px">
          Forgot password?{' '}
          <Link color="#0500ff" fontWeight="600" ml="147px">
            Restore
          </Link>
        </Text>
      ) : null}
    </>
  );
};
