"use client";

import { createContext, useState } from "react";
import axios from "axios";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    avatar_img: "",
  });
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      //   const response = await axios.get();
    } catch (error) {
      console.log("cannot fetching user data", error);
    }
  };
};
export default UserProvider;
