import React, { createContext } from "react";

const UserContext = createContext();

const userdata = {
  id: 1,
  name: "Ram",
  email: "ram@gmail.com",
  dec: "Ram is a good person",
};

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={userdata}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
