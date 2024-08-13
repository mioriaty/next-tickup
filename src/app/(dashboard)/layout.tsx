import React, { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default DashboardLayout;
