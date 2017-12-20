import * as React from "react";
import { IStore } from "../store";
import { IAthlete } from "../model";

interface IRankingProps {
  athlete: IAthlete;
}

export class Athlete extends React.Component<IRankingProps> {
  render() {
    return (
      <div>Athlete {this.props.athlete.FamilyName} {this.props.athlete.GivenName}</div>
    )
  }
}

