"use client";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import Duguichart from "@/app/components/dashboard/Duguichart";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import Barchart from "@/app/components/dashboard/Barchart";
import toast from "react-hot-toast";

const Dashboard = () => {
  Chart.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale);
  const { userData } = useContext(UserContext);
  const [cartData, setCartData] = useState(null);
  const [getRecords, setGetRecords] = useState([]);

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

  const getCartGuilgee = async () => {
    try {
      const respo = await axios.get(`${apiUrl}/orderuud`);
      console.log("cartnii guilgeenuudiig harah : ", respo.data.recordList);
      setGetRecords(respo.data.recordList);
    } catch (error) {
      toast.error("amjiltgui");
      console.error("cartnii guilgeenuud amjiltgui", error);
    }
  };

  useEffect(() => {
    getCartDataInfo();
    getCartGuilgee();
  }, [userData]);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-x-4">
        <div className="w-full h-[30vh] rounded-3xl">
          <img src="R.png" className="rounded-3xl" />
        </div>
        <div className="w-full h-[30vh] bg-green-200 rounded-3xl">
          <h1>Нийт орлого</h1>
          <h1 className="text-5xl font-extrabold">{cartData?.inc.sum}₮</h1>
          <h2>Your income account</h2>
        </div>
        <div className="w-full h-[30vh] bg-pink-200 rounded-3xl">
          <h1>Нийт зарлага</h1>
          <h1 className="text-5xl font-extrabold">-{cartData?.exp.sum}₮</h1>
          <h2>Your expence account</h2>
        </div>
      </div>
      <div>
        <Barchart />
        <Duguichart />
      </div>
      <div>
        {getRecords.map((record) => (
          <div className="flex flex-row">
            <div>{record.name}</div>
            <div>{record.description}</div>
            <div>{record.amount}</div>
            <div>{record.transaction_type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
