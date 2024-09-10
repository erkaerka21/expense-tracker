"use client";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import { apiUrl } from "@/utils/util";

const Dashboard = () => {
  const { userData } = useContext(UserContext);
  const [cartData, setCartData] = useState(null);
  const [getRecord, setGetRecord] = useState([]);

  const getCartDataInfo = async () => {
    try {
      const res = await axios.get(`${apiUrl}/orderuud/info`);
      console.log("guilgeenii datanuud", res.data);
      setCartData(res.data);
    } catch (error) {
      console.error("amjiltgui", error);
      toast.error("амжилтгүй");
    }
  };

  useEffect(() => {
    getCartDataInfo;
  }, [userData]);
  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-x-4">
        <div className="w-full h-[30vh] rounded-3xl">
          <img src="R.png" className="rounded-3xl" />
        </div>
        <div className="w-full h-[30vh] bg-green-200 rounded-3xl">
          <h1>Total income</h1>
          <h1>{cartData?.inc.sum}</h1>
          <h2>Your income account</h2>
        </div>
        <div className="w-full h-[30vh] bg-pink-200 rounded-3xl">
          <h1>Total expences</h1>
          <h1 className="text-5xl font-extrabold"></h1>
          <h2>Your expence account</h2>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dashboard;
