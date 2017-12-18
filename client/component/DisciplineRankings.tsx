import * as React from "react";

import { observer } from "mobx-react";

import { IStore } from "../store";
import { Ranking } from "./AthleteRanking";

interface IDisciplineRankingsProps {
  store: IStore
}

@observer
export class DisciplineRankings extends React.Component<IDisciplineRankingsProps> {
  render() {
    if (this.props.store.selectedDiscipline === "")
      return (<div />)

    const rankings = this.props.store.athleteRankings.map(r => <Ranking key={r.ID} ranking={r} />);
    return (
      <div>
        {rankings}
      </div>
    );
  }
}
