import React from "react";

export const Header = ({ userData }) => {
  return (
    <header>
      <div>
        <img src="Vector.png" alt="logo" />
        <h1>Dashboard</h1>
        <h1>Records</h1>
      </div>
      <div>
        <button className="bg-blue-600 text-white font-medium">+ Record</button>
        <p className="text-black">{userData.name}</p>
        <img />
      </div>
    </header>
  );
};
