import { Draggable } from "react-beautiful-dnd";
import { useContext, useState } from "react";
import MyResponsiveBar from "../charts/MyResponsiveBar";
import MyResponsivePie from "../charts/MyResponsivePie";
import MyResponsiveRadar from "../charts/MyResponsiveRadar";
import MyResponsiveSunburst from "../charts/MyResponsiveSunburst";
import { ChartContext, ChartObject } from "../../Dashboard";
import { useEffect } from "react";

const charts: ChartObject[] = [
  {
    id: 1,
    chart: <MyResponsiveBar />,
  },
  {
    id: 2,
    chart: <MyResponsivePie />,
  },
  {
    id: 3,
    chart: <MyResponsiveRadar />,
  },
  {
    id: 4,
    chart: <MyResponsiveSunburst />,
  },
];

const PusdiklatBahasa = () => {
  const { setChartsObject, chartsObject } = useContext(ChartContext);
  useEffect(() => {
    setChartsObject(charts);
  }, []);
  console.log(chartsObject);

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

export default PusdiklatBahasa;
