import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser]=useState([]);
    const [price, setPrice]=useState(0);
    const [filter, setFilter]=useState([]);
    const [bmi, setBmi]=useState("Normal");

    return (
      <UserContext.Provider value={{ user, setUser, price, setPrice, filter, setFilter, bmi, setBmi}}>{children}</UserContext.Provider>
    );
  };

  export { UserProvider, UserContext };
  