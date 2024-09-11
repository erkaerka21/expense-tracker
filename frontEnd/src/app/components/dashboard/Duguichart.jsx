import React, { useEffect, useState } from "react";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import toast from "react-hot-toast";

const Duguichart = () => {
  const [duguiDataChart, setDuguiDataChart] = useState(null);
  const getDuguiChartData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/orderuud/chartinfo`);
      console.log(
        "dugui graphiciin datanuudiig harah : ",
        response.data.duguiChartData
      );
      setDuguiDataChart(response.data.duguiChartData);
    } catch (error) {
      toast.error("amjiltgui");
      console.error("amjiltgui", error);
    }
  };

  const data = duguiDataChart?.map((d) => d.sum);
  const lBL = duguiDataChart?.map((d) => d.cat_name);

  const dataD = {
    datasets: [
      {
        data,
        labels: lBL,
        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  useEffect(() => {
    getDuguiChartData();
  }, []);
  return (
    <div>
      {/* <button onClick={change}>dd</button> */}
      <Doughnut options={options2} data={dataD} />
    </div>
  );
};

export default Duguichart;

// "use client";

// const Duguichart = () => {
//   const [duguiData, setDuguiData] = useState(null);

//

//   // const lbl = duguiData?.map((d) => d.cat_name);
//   // const data = duguiData?.map((d) => d.sum);

//

//   console.log("LBL");

//   return (
//     <div>
//
//     </div>
//   );
// };

// export default Duguichart;
