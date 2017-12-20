import * as React from "react";

import { observer } from "mobx-react";
import { IStore } from "../store";

interface IAppProps {
  store: IStore;
}

@observer
export class DisciplineSelector extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.store.fetchDisciplinesAsync();
  }

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.store.selectDisciplineAsync(e.target.value);
  }

  render() {
    const disciplines = this.props.store.disciplines.map(d => <option key={d} value={d}>{d}</option>)

    if (disciplines.length == 0)
      return (<span> Loading ... </span>);

    return (
      <div className="container">
        Select a discipline:
        <select value={this.props.store.selectedDiscipline} onChange={this.handleChange}>
          <option disabled hidden value="" />
          {disciplines}
        </select>
      </div>
    )

  }
}


