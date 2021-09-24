import React, { useContext } from "react";
import { UserContext } from "./User";

export const ShowUser = () => {
  const { selectUser } = useContext(UserContext);

  return <>{selectUser ? `Password = ${selectUser.password}` : `Password =`}</>;
};
