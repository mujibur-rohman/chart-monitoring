import React from "react";
import MyResponsiveBullet from "../charts/MyResponsiveBullet";
import MyResponsiveRadialBar from "../charts/MyResponsiveRadialBar";

const PusdiklatBelaNegara = () => {
  return (
    <>
      <div className="bg-white rounded-box">
        <MyResponsiveBullet />
      </div>
      <div className="bg-white rounded-box">
        <MyResponsiveRadialBar />
      </div>
    </>
  );
};

export default PusdiklatBelaNegara;
