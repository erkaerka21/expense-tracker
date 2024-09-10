"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
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
        console.log("user info", response.data);
      }
    } catch (error) {
      console.error("cannot fetching user data", error);
    }
  };
  useEffect(() => {
    if (!userData) {
    }
    fetchUserData;
  }, [userData]);
  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
