"use client";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import toast from "react-hot-toast";

const Barchart = () => {
  const [barData, setBarData] = useState(null);
  const getBarData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/orderuud/chartinfo`);
      console.log("bar graphiciin datanuudiig harah : ", res.data.barChartData);
      setBarData(res.data.barChartData);
    } catch (error) {
      toast.error("bar data amjiltgui", error);
      console.error(error);
    }
  };

  const lBL = barData?.map((dat) => dat.sar);
  const dataInc = barData?.map((dat) => dat.total_inc);
  const dataExp = barData?.map((dat) => dat.total_exp);
  const data1 = {
    labels: lBL,
    datasets: [
      {
        label: "Орлого",
        backgroundColor: "#22C55E",
        data: dataInc,
      },
      {
        label: "Зарлага",
        backgroundColor: "#F87171",
        data: dataExp,
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    getBarData();
  }, []);
  return (
    <div>
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default Barchart;
