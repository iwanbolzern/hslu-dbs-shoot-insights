import * as React from "react";
import { IStore } from "../store";
import { IAthlete } from "../model";
import { graph } from "./XYPlotter";

interface IRankingProps {
  athlete: IAthlete;
}

export class Athlete extends React.Component<IRankingProps> {
    render() {
        const asdf = this.props.athlete.Disciplines.map(r => <div>
            <h1 className="title">{r.Name}</h1>
            <h2 className="subtitle">Qualifikation</h2>
            {r.Qualifications.map(d => <div>
                {d.Competition}
                {graph(d.Series)}
            </div>)}
            <h2 className="subtitle">Finals</h2>
            {r.Finals.map(f =>
                <div>
                    {f.Competition}
                    {graph(f.Series)}
                </div>)}
        </div>);

      return (
          <div>
              <div>Athlete {this.props.athlete.FamilyName} {this.props.athlete.GivenName}</div>
              <div>
                  {asdf}
              </div>
         </div>
      )
  }
}
