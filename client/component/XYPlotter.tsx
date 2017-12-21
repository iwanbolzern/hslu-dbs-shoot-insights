import * as React from "react";
const reactvis = require('react-vis');
const XYPlot = reactvis.XYPlot,
    XAxis = reactvis.XAxis,
    YAxis = reactvis.YAxis,
    HorizontalGridLines = reactvis.HorizontalGridLines,
    LineSeries = reactvis.LineSeries;

export function graph(values: number[], width?: number, height?: number) {
  height = height ? height : 25;
  width = width ? width : 200;
  return <XYPlot
      stackBy="x"
      margin={{left: 2, right: 2, top: 2, bottom: 2}}
      width={width}
      height={height}>
      <LineSeries
        data={values.map((v, i) => {
            return {x: i, y: v};
        })}/>
    </XYPlot>;
}
