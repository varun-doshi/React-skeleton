import { createContext, useState } from "react";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("React");
  function showUser() {
    console.log(user);
  }

  return (
    <UserContext.Provider value={{ user, setUser, showUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
