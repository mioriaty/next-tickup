'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/shared/components/ui/button';

interface LoginButtonProps {}

const LoginButton: React.FC<LoginButtonProps> = () => {
  const router = useRouter();

  const redirectToSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <Button size={'sm'} className="px-10 block" onClick={redirectToSignIn}>
      Go to sign in
    </Button>
  );
};

export default LoginButton;
