import { apiUrl } from "@/utils/util";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const Duguichart = () => {
  const getDuguiChart = async () => {
    const response = await axios.get(`${apiUrl}/orderuud/chartinfo`);
    console.log("dugui chartnii datanuud", response.data);
  };
  useEffect(() => {
    getDuguiChart();
  }, []);
  return (
    <div>
      <Doughnut />
    </div>
  );
};

export default Duguichart;
