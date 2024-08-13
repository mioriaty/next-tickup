import React, { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="w-full h-screen flex justify-center items-center">{children}</main>;
};

export default AuthLayout;
