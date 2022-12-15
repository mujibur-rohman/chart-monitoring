/* eslint-disable react-hooks/exhaustive-deps */
import { Draggable } from "react-beautiful-dnd";
import { useContext } from "react";
import { ChartContext, ChartObject } from "../../Dashboard";
import { useEffect } from "react";
import ChartRender from "../charts/ChartRender";

const charts: ChartObject[] = [
  {
    id: 1,
    chart: "bar",
  },
  {
    id: 2,
    chart: "pie",
  },
  {
    id: 3,
    chart: "radar",
  },
  {
    id: 4,
    chart: "sunburst",
  },
];

const PusdiklatBahasa = () => {
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

export default PusdiklatBahasa;
