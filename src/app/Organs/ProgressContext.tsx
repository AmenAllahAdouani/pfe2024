import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProgressContextType {
  progressValue: number;
  setProgressValue: (value: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [progressValue, setProgressValue] = useState(0);

  return (
    <ProgressContext.Provider value={{ progressValue, setProgressValue }}>
      {children}
    </ProgressContext.Provider>
  );
};