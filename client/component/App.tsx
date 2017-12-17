import * as React from "react";

import { observer } from "mobx-react";

import { IDiscipline } from "../model";
import { IStore } from "../store";

import { AthleteRanking } from "./AthleteRanking";
import { ChangeEvent } from "react";

interface IAppProps {
  store: IStore;
}

@observer
export class App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.store.fetchDisciplinesAsync();
  }

  handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.props.store.selectDiscipline(e.target.value);
  }

  render() {
    const disciplines = this.props.store.disciplines.map(d => <option key={d} value={d}>{d}</option>)

    if (disciplines.length == 0)
      return (<span> Loading ... </span>);

    return (
      <div>
        <span>Select a discipline:</span>
        <select value={this.props.store.selectedDiscipline} onChange={this.handleChange}>
          <option disabled hidden value="" />
          {disciplines}
        </select>
      </div>
    )

  }
}

