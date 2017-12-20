import * as React from "react";

import { observer } from "mobx-react";

import { IStore } from "../store";

import { Ranking } from "./AthleteRanking";
import { Athlete } from "./Athlete";
import { DisciplineSelector } from "./DisciplineSelector";
import { DisciplineRankings } from "./DisciplineRankings";

interface IAppProps {
  store: IStore;
}

@observer
export class App extends React.Component<IAppProps> {
  render() {
    let content = <div />

    if (this.props.store.selectedAthlete !== null) {
      content = <Athlete athlete={this.props.store.selectedAthlete} />
    } else {
      content = <DisciplineRankings store={this.props.store} />
    }

    return (
      <div className="container">
        <section className="section">
          <div className="container">
            <h1 className="title">Shoot Insights</h1>
            <h2 className="subtitle">
              <DisciplineSelector store={this.props.store} />
            </h2>
          </div>
        </section>

        {content}
      </div>
    )
  }
}

