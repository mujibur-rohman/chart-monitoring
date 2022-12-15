import React, { useEffect, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ChartContext, ChartObject } from "../../Dashboard";
import MyResponsiveBullet from "../charts/MyResponsiveBullet";
import MyResponsiveRadialBar from "../charts/MyResponsiveRadialBar";

const charts: ChartObject[] = [
  {
    id: 1,
    chart: <MyResponsiveBullet />,
  },
  {
    id: 2,
    chart: <MyResponsiveRadialBar />,
  },
];

const PusdiklatBelaNegara = () => {
  const { setChartsObject, chartsObject } = useContext(ChartContext);
  useEffect(() => {
    setChartsObject(charts);
  }, []);

  return (
    <>
      {chartsObject.map((item, index) => (
        <Draggable draggableId={item.id.toString()} index={index} key={item.id}>
          {(provided) => (
            <div
              className="bg-white rounded-box"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {item.chart}
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default PusdiklatBelaNegara;
