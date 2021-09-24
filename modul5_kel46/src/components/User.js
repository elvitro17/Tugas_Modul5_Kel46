import { useState, createContext, useMemo } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [username, setUsername] = useState([]);
  const [selectUser, setUser] = useState(null);
  const value = useMemo(() => {
    return { username, setUsername, selectUser, setUser };
  }, [username, selectUser]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
export { UserContext, UserProvider };
