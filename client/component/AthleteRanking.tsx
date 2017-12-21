import * as React from "react";
var FontAwesome = require('react-fontawesome');
import { IRanking } from "../model";
import { graph } from "./XYPlotter";

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

    var trendView = null;
    if(this.props.ranking.Trend == 'up') {
        trendView = <FontAwesome
            className='fa-rotate-90'
            name='arrow-right'
            size='2x'
            style={{color: 'rgba(0, 0, 0, 1)'}} />
    } else if(this.props.ranking.Trend == 'equal') {
        trendView = <FontAwesome
            className='fa-rotate-180'
            name='arrow-right'
            size='2x'
            style={{color: 'rgba(0, 0, 0, 1)'}} />
    } else {
        trendView = <FontAwesome
            className='fa-rotate-100'
            name='arrow-right'
            size='2x'
            style={{color: 'rgba(0, 0, 0, 1)'}} />
    }

    return (
      <tr>
        <td><button onClick={callback}>View</button></td>
        <td><span className="column">{this.props.ranking.Name}</span></td>
        <td><span className="column">{this.props.ranking.Nationality}</span></td>
          <td><span className="column">{series}</span></td>
          <td><span className="column">{avg}</span></td>
        <td><span className="column">{trendView}</span></td>
      </tr>
    )
  }
}
