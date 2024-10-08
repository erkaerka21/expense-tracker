"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { UserContext } from "../context/user-context";

export const Header = ({ userData, signOut }) => {
  console.log("userdatanuudiig harah", userData);
  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row">
        <img src="Vector.png" alt="logo" className="h-8" />
        <Link href="/dashboard">
          <h1>Dashboard</h1>
        </Link>
        <Link href="/recorduud">
          <h1>Records</h1>
        </Link>
      </div>
      <div className="flex flex-row">
        <button className="btn bg-blue-600 text-white font-medium flex flex-row rounded-3xl">
          <FaPlus />
          Record
        </button>
        <p className="text-black text-8xl">{userData?.name}</p>
        <img className="rounded-full h-4 w-4" />
        <button className="btn" onClick={signOut}>
          Logout
        </button>
      </div>
    </header>
  );
};

// const [duguiData, setDuguiData] = useState(null);

//   const getDuguiChart = async () => {
//     try {
//       const response = await axios.get(`${apiUrl}/orderuud/chartinfo`);
//       console.log(
//         "dugui graphiciin datanuud===>",
//         response.data.duguiChartData
//       );
//       setDuguiData(response.data.duguiChartData);
//       console.log("FINISHED");
//     } catch (error) {
//       console.error("amjiltgui", error);
//       toast.error("amjiltgui");
//     }
//   };

//   const change = () => {
//     console.log("first");
//     setDuguiData({ name: "SSS" });
//     toast.success("HH");
//   };

//   useEffect(() => {
//     getDuguiChart();
//   }, []);
