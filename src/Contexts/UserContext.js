import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [password, setPassword] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) === true);
    console.log(JSON.parse(localStorage.getItem("user") === "true"), user);
  }, [user]);

  const contextValue = {
    user,
    setUser,
    password,
    setPassword,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export { UserProvider, UserContext };
