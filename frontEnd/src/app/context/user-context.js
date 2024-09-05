"use client";

import { createContext, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    avatar_img: "",
  });
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        setUserData(response.data);
        console.error("user info", response.data);
      }
    } catch (error) {
      console.error("cannot fetching user data", error);
    }
  };
  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
