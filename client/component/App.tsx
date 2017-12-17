import * as React from "react";

import { observer } from "mobx-react";

import { IDiscipline } from "../model";
import { IStore } from "../store";

import { Ranking } from "./AthleteRanking";
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
      <div className="container">
        <section className="section">
          <div className="container">
            <h1 className="title">Shoot Insights</h1>
            <h2 className="subtitle">
              Select a discipline:
              <select value={this.props.store.selectedDiscipline} onChange={this.handleChange}>
                <option disabled hidden value="" />
                {disciplines}
              </select>
            </h2>
          </div>
        </section>

        <Ranking ranking={this.props.store.exampleRanking} />
      </div>

    )

  }
}

