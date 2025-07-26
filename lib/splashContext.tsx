import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface SplashContextType {
  hasSeenSplash: boolean;
  setHasSeenSplash: (value: boolean) => void;
}

export const SplashContext = createContext<SplashContextType | undefined>(
  undefined
);

interface SplashProviderProps {
  children: ReactNode;
}

export function SplashProvider({ children }: SplashProviderProps) {
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  return (
    <SplashContext.Provider value={{ hasSeenSplash, setHasSeenSplash }}>
      {children}
    </SplashContext.Provider>
  );
}
