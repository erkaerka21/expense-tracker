import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";

const LayoutDashboard = ({ children }) => {
  const { userData, fetchUserData } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <Headers userData={userData}>{children}</Headers>
    </div>
  );
};

export default LayoutDashboard;
