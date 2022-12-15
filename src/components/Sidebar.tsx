import React from "react";
import MENUS from "../constant/menus";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-primary p-4 rounded-[2.5rem] self-stretch mr-4 ">
      {MENUS.map((menu) => (
        <div
          key={menu.id}
          className="text-neutral flex gap-2 items-center rounded-lg py-3 px-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:text-white"
        >
          {menu.icon}
          <p>{menu.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
