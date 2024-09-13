"use client";

import { apiUrl } from "@/utils/util";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dbChartData, setdbChartData] = useState(null);

  const getChartData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/orderuud/chartinfo`);
      console.log(
        "dashboardnii chart datanuudiig harah : ",
        response.data.bar,
        response.data.dugui
      );
      setdbChartData({
        barchart: response.data.bar,
        duguichart: response.data.dugui,
      });
    } catch (error) {
      toast.error("contextees chart datanuudiig harah amjiltgui : ");
      console.error("contextees chart datanuudiig harah amjiltgui : ", error);
    }
  };
  useEffect(() => {
    getChartData();
  }, []);
  return (
    <DashboardContext.Provider
      value={{
        barchart: dbChartData?.barchart,
        duguichart: dbChartData?.duguichart,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
