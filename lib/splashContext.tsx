"use client";

import { createContext, useState, ReactNode } from "react";

interface SplashContextType {
  hasSeenSplash: boolean;
  setHasSeenSplash: (value: boolean) => void;
}

export const SplashContext = createContext<SplashContextType | null>(null);

export const SplashProvider = ({ children }: { children: ReactNode }) => {
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  return (
    <SplashContext.Provider value={{ hasSeenSplash, setHasSeenSplash }}>
      {children}
    </SplashContext.Provider>
  );
};
