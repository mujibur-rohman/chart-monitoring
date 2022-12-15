import React from "react";
import MyResponsiveCalendar from "../charts/MyResponsiveCalendar";

const PusdiklatJemenhan = () => {
  return (
    <div>
      <div className="grid h-[55vh] grid-cols-1 py-5 gap-5">
        <div className="bg-white rounded-box">
          <MyResponsiveCalendar />
        </div>
      </div>
    </div>
  );
};

export default PusdiklatJemenhan;
