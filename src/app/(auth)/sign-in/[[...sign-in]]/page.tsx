import { SignIn } from '@clerk/nextjs';
import React from 'react';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return <SignIn fallbackRedirectUrl="/dashboard" />;
};

export default LoginPage;
