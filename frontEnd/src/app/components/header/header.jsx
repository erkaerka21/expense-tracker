import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <img src="Vector.png" alt="logo" />
        <h1>Dashboard</h1>
        <h1>Records</h1>
      </div>
      <div>
        <button className="bg-blue-600 text-white font-medium">+ Record</button>
        <p></p>
        <img />
      </div>
    </div>
  );
};

export default Header;
