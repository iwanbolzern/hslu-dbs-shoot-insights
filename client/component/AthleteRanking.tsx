import * as React from "react";
import { IRanking } from "../model";

interface IRankingProps {
  ranking: IRanking;
  selectAthlete: (id: string) => void;
}

export class Ranking extends React.Component<IRankingProps> {
  render() {
    let series = this.props.ranking.AvgSeries
      .map(n => n.toFixed(2))
      .map(s => s.toString())
      .reduce((prev, curr) => `${prev},${curr}`, "")
    series = series.substr(1); // Trim leading comma

    const avg = this.props.ranking.AvgScore.toFixed(2);
    const callback = () => this.props.selectAthlete(this.props.ranking.ID);

    return (
      <div className="columns">
        <button onClick={callback}>View</button>
        <span className="column">{this.props.ranking.Name}</span>
        <span className="column">{this.props.ranking.Nationality}</span>
        <span className="column">{avg}</span>
        <span className="column">{series}</span>
        <span className="column">{this.props.ranking.Trend}</span>
      </div>
    )
  }
}
