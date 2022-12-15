/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ChartContext, ChartObject } from "../../Dashboard";
import ChartRender from "../charts/ChartRender";

const charts: ChartObject[] = [
  {
    id: 1,
    chart: "geo",
  },
  {
    id: 2,
    chart: "stream",
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
              <ChartRender chart={item.chart} />
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default PusdiklatTekfungham;
