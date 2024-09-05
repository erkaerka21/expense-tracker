"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import { Header } from "../components";

const LayoutDashboard = ({ children }) => {
  const { userData, fetchUserData } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <Header userData={userData.name} />
      {children}
    </div>
  );
};

export default LayoutDashboard;
