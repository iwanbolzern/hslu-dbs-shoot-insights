import * as React from "react";
const reactvis = require('react-vis');
const XYPlot = reactvis.XYPlot,
    XAxis = reactvis.XAxis,
    YAxis = reactvis.YAxis,
    HorizontalGridLines = reactvis.HorizontalGridLines,
    LineSeries = reactvis.LineSeries;

export function graph(values: number[][], width?: number, height?: number) {
  height = height ? height : 25;
  width = width ? width : 200;

  var lineSeries = values.map(series => <LineSeries
      data={series.map((v, i) => {
          return {x: i, y: v};
      })}/>
  );

  return <XYPlot
      stackBy="x"
      margin={{left: 2, right: 2, top: 2, bottom: 2}}
      width={width}
      height={height}>
      {lineSeries}
    </XYPlot>;
}
