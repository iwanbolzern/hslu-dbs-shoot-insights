import * as React from "react";
import { IAthlete } from "../model";

interface IAthleteRankingProps {
  athlete: IAthlete;
}

export class AthleteRanking extends React.Component<IAthleteRankingProps> {
  render() {
    return (
      <div>
        <span>{this.props.athlete.Name}</span>
      </div>
    )
  }
}
