// SessionProvider.jsx
import React, { createContext } from 'react';
import { useSession } from '../hooks/useSession';

export const SessionContext = createContext();

export default function SessionProvider({ children }) {
  const session = useSession();
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
