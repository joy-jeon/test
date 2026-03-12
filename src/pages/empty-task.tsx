import React from 'react';
import { Layout } from '@/components/layouts/Layout'; 
import EmptyState from '@/components/organisms/empty/EmptyState'; 

const EmptyTaskPage = () => {
  return (
    <Layout>
      <EmptyState />
    </Layout>
  );
};

export default EmptyTaskPage;