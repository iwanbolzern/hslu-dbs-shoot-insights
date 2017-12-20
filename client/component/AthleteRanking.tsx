import * as React from "react";
import { IRanking } from "../model";

interface IRankingProps {
  ranking: IRanking;
}

export class Ranking extends React.Component<IRankingProps> {
  render() {
    const series = this.props.ranking.AvgSeries
      .map(n => n.toFixed(2))
      .map(s => s.toString())
      .reduce((prev, curr) => `${prev},${curr}`)

    const avg = this.props.ranking.AvgScore.toFixed(2);

    return (
      <div className="columns">
        <span className="column">{this.props.ranking.ID}</span>
        <span className="column">{this.props.ranking.Name}</span>
        <span className="column">{this.props.ranking.Nationality}</span>
        <span className="column">{avg}</span>
        <span className="column">{series}</span>
        <span className="column">{this.props.ranking.Trend}</span>
      </div>
    )
  }
}
