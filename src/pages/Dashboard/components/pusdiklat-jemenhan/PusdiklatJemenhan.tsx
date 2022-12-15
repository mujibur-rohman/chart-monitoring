import React, { useEffect, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ChartContext, ChartObject } from "../../Dashboard";
import MyResponsiveCalendar from "../charts/MyResponsiveCalendar";
import MyResponsiveRadialBar from "../charts/MyResponsiveRadialBar";

const charts: ChartObject[] = [
  {
    id: 1,
    chart: <MyResponsiveCalendar />,
  },
  {
    id: 2,
    chart: <MyResponsiveRadialBar />,
  },
];

const PusdiklatJemenhan = () => {
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

export default PusdiklatJemenhan;
