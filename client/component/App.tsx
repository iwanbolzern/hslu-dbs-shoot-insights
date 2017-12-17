import * as React from "react";
import { IAthlete } from "../model";
import { AthleteRanking } from "./AthleteRanking";

interface IAppState {
  athlete: IAthlete | null;
}

export class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = { athlete: null };
  }

  async componentDidMount() {
    const response = await fetch("/athlet/id");
    const json = await response.json();
    this.setState({ athlete: json });
  }

  render() {
    if (this.state.athlete === null)
      return (<div>Loading...</div>)

    return (
      <div>
        <AthleteRanking athlete={this.state.athlete} />
      </div>
    )
  }
}

