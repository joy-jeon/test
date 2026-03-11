// src/components/preview/Tab.preview.tsx
import React from 'react';
import { Tab } from '@/components/atoms/Tab/Tab';
import { Icon } from '@/components/atoms/Icon/Icon';

export const TabPreview = () => {
  return (
    <div className="p-da-space-md space-y-12 bg-da-white min-h-screen">
      <section>
        <h2 className="text-da-h3 font-bold mb-6 pb-2 border-b border-da-divider-content-line text-da-t-title">
          Tab Atom States
        </h2>
        <div className="flex items-center gap-6">
          <Tab label="Default" selected={false} leftIcon={<Icon name="aiSquare"/>} />
          <Tab label="Active" selected={true} leftIcon={<Icon name="aiPen"/>} />
          <Tab label="Disabled" disabled={true} leftIcon={<Icon name="aiSquare"/>} />
        </div>
      </section>
    </div>
  );
};

export default TabPreview;