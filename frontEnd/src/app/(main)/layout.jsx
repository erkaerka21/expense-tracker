"use client";
import React, { useContext, useEffect } from "react";
import { UserContext, UserProvider } from "../context/user-context";
import { useRouter } from "next/navigation";
import { Header } from "../components";
import toast from "react-hot-toast";

const LayoutDashboard = ({ children }) => {
  const { userData, fetchUserData } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    fetchUserData();
  }, []);
  const signOut = () => {
    localStorage.removeItem("token");
    toast.success("Системээс гарлаа");
    router.push("/signin");
  };
  return (
    <div>
      <Header userData={userData} signOut={signOut} />
      {children}
    </div>
  );
};

export default LayoutDashboard;
