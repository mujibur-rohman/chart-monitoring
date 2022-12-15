import React from "react";
import MyResponsiveBar from "./MyResponsiveBar";
import MyResponsiveBullet from "./MyResponsiveBullet";
import MyResponsiveCalendar from "./MyResponsiveCalendar";
import MyResponsiveGeo from "./MyResponsiveGeo";
import MyResponsivePie from "./MyResponsivePie";
import MyResponsiveRadar from "./MyResponsiveRadar";
import MyResponsiveRadialBar from "./MyResponsiveRadialBar";
import MyResponsiveStream from "./MyResponsiveStream";
import MyResponsiveSunburst from "./MyResponsiveSunburst";
type ChartRenderProps = {
  chart: string;
};

const ChartRender = (props: ChartRenderProps) => {
  if (props.chart === "bar") return <MyResponsiveBar />;
  if (props.chart === "pie") return <MyResponsivePie />;
  if (props.chart === "radar") return <MyResponsiveRadar />;
  if (props.chart === "sunburst") return <MyResponsiveSunburst />;
  if (props.chart === "bullet") return <MyResponsiveBullet />;
  if (props.chart === "radialBar") return <MyResponsiveRadialBar />;
  if (props.chart === "calendar") return <MyResponsiveCalendar />;
  if (props.chart === "geo") return <MyResponsiveGeo />;
  if (props.chart === "stream") return <MyResponsiveStream />;
  return null;
};

export default ChartRender;
