"use client";
import React, { useContext, useEffect, useState } from "react";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import toast from "react-hot-toast";
import { DashboardContext } from "@/app/context/dashboard-context";

const Duguichart = () => {
  const { duguichart } = useContext(DashboardContext);

  const data = duguichart?.map((d) => d.sum);
  const lBL = duguichart?.map((d) => d.cat_name);

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
