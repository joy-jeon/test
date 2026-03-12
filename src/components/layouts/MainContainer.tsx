import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main data-component="main" className="w-full bg-da-white min-h-[calc(100vh-60px)]">
      <div data-component="main-inner" className="mx-auto w-full max-w-[1920px] py-da-space-md">
        {children}
      </div>
    </main>
  );
};