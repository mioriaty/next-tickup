import { SignUp } from '@clerk/nextjs';
import React from 'react';

interface PageProps {}

const RegisterPage: React.FC<PageProps> = () => {
  return <SignUp fallbackRedirectUrl={'/dashboard'} />;
};

export default RegisterPage;
