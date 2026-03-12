import React from 'react';
import { Icon } from '@/components/atoms/Icon/Icon';

export const Header = () => {
  return (
    <header data-component="header" className="h-[60px] w-full items-center justify-center border-b border-da-divider-top-content-line bg-da-white px-da-space-md">
      <div data-component="header-inner" className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-start px-da-space-md">
        <Icon name="logoDiscoveryAgent" ghost={false}/>
        <h1 className="text-da-h3 font-bold text-da-btn-purple-focus">
          Discovery Agent
        </h1>
      </div>
    </header>
  );
};