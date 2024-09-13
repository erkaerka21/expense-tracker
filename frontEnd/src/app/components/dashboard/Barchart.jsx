"use client";
import { DashboardContext } from "@/app/context/dashboard-context";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import toast from "react-hot-toast";

const Barchart = () => {
  const { barchart } = useContext(DashboardContext);

  const lBL = barchart?.map((dat) => dat.sar);
  const dataInc = barchart?.map((dat) => dat.total_inc);
  const dataExp = barchart?.map((dat) => dat.total_exp);
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

  return (
    <div>
      <Bar data={data1} options={options1} />
    </div>
  );
};

export default Barchart;
