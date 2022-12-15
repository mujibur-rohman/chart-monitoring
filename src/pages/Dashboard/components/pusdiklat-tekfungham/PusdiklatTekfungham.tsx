import MyResponsiveGeo from "../charts/MyResponsiveGeo";
import MyResponsiveStream from "../charts/MyResponsiveStream";
import React, { useEffect, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ChartContext, ChartObject } from "../../Dashboard";

const charts: ChartObject[] = [
  {
    id: 1,
    chart: <MyResponsiveGeo />,
  },
  {
    id: 2,
    chart: <MyResponsiveStream />,
  },
];

const PusdiklatTekfungham = () => {
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

export default PusdiklatTekfungham;
