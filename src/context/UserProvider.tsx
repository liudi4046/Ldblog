import { ReactNode, createContext, useContext, useState } from "react";

import { User } from "@supabase/supabase-js";

interface UserContextProps {
  curUser: User | null;
  setCurUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextProps>({
  curUser: null,
  setCurUser: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [curUser, setCurUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ curUser, setCurUser }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => useContext(UserContext);
