import { ResponsiveSunburst } from "@nivo/sunburst";
import { dataSunburst } from "./data";

const MyResponsiveSunburst = () => (
  <ResponsiveSunburst
    data={dataSunburst}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    id="name"
    value="loc"
    cornerRadius={2}
    borderColor={{ theme: "background" }}
    colors={{ scheme: "nivo" }}
    childColor={{
      from: "color",
      modifiers: [["brighter", 0.1]],
    }}
    enableArcLabels={true}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 1.4]],
    }}
  />
);

export default MyResponsiveSunburst;
