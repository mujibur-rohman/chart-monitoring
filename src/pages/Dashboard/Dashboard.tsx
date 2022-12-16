import React, { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Outlet } from "react-router-dom";
import PusdiklatBahasa from "./../../assets/pusdiklat-bahasa.png";
import PusdiklatBelanegara from "./../../assets/pusdiklat-belanegara.png";
import PusdiklatJemenhan from "./../../assets/pusdiklat-jemenhan.png";
import PusdiklatTekfungham from "./../../assets/pusdiklat-tekfungham.png";
import BoxPusdiklat from "./components/BoxPusdiklat";

export type ChartObject = {
  id: number;
  chart: string;
};

type ChartType = {
  setChartsObject: (chart: ChartObject[]) => void;
  chartsObject: ChartObject[];
};

export const ChartContext = React.createContext<ChartType>({
  setChartsObject(chart) {},
  chartsObject: [],
});
const Dashboard = () => {
  const [charts, setCharts] = useState<ChartObject[]>([]);

  const setChartToState = (chart: ChartObject[]) => {
    setCharts(chart);
  };

  const onDragHandle = (result: DropResult) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const items = Array(...charts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    if (result?.destination?.index !== undefined) {
      items.splice(result.destination.index, 0, reorderedItem);
    }
    setCharts(items);
    console.log(items);
  };

  return (
    <div className="h-full">
      <div className="flex gap-2 flex-col mb-4">
        <h1 className="text-3xl text-white">Dashboard Pimpinan</h1>
        <span className="text-neutral">Beranda / Dashboard Pimpinan</span>
      </div>
      <div className="bg-accent p-5 rounded-box">
        <div className="grid grid-cols-4 gap-5">
          <BoxPusdiklat
            img={PusdiklatBahasa.toString()}
            title="Pusdiklat Bahasa"
            to="pusdiklat-bahasa"
          />
          <BoxPusdiklat
            img={PusdiklatBelanegara.toString()}
            title="Pusdiklat Bela Negara"
            to="pusdiklat-bela-negara"
          />
          <BoxPusdiklat
            img={PusdiklatJemenhan.toString()}
            title="Pusdiklat Tekfungham"
            to="pusdiklat-tekfungham"
          />
          <BoxPusdiklat
            img={PusdiklatTekfungham.toString()}
            title="Pusdiklat Jemenhan"
            to="pusdiklat-jemenhan"
          />
        </div>
      </div>

      <div>
        <DragDropContext onDragEnd={onDragHandle}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provider) => (
              <div
                ref={provider.innerRef}
                {...provider.droppableProps}
                className="grid h-[55vh] grid-cols-2 py-4 gap-5"
              >
                <ChartContext.Provider
                  value={{
                    setChartsObject: setChartToState,
                    chartsObject: charts,
                  }}
                >
                  <Outlet />
                </ChartContext.Provider>
                {provider.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Dashboard;
