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
      <div className="container" style={{margin: "0px auto"}}>
        <section className="section">
          <div className="container">
            <div>
              <img style={{marginLeft: "2em", marginTop: "1em", width: "600px"}} src="imgs/banner.png" />
            </div>
            <h2 style={{verticalAlign: "center"}} className="subtitle">
              <DisciplineSelector store={this.props.store} />
            </h2>
          </div>
        </section>

        {content}
      </div>
    )
  }
}

