import { useUser } from '@clerk/nextjs';
import React from 'react';

interface PageProps {}

const DashboardPage: React.FC<PageProps> = () => {
  const { user } = useUser();
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default DashboardPage;
