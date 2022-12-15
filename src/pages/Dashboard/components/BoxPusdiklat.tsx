import React from "react";
import { NavLink } from "react-router-dom";

type BoxPusdiklatProps = {
  img: string;
  title: string;
  to: string;
};

const BoxPusdiklat = (props: BoxPusdiklatProps) => {
  return (
    <NavLink
      end
      to={props.to}
      className="flex items-center bg-primary p-4 rounded-3xl text-white gap-3 max-w-xs pusdiklat"
    >
      <img src={props.img} alt="pusdiklat" className="w-24 h-24 object-cover" />
      <p>{props.title}</p>
    </NavLink>
  );
};

export default BoxPusdiklat;
