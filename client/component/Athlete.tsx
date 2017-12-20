import * as React from "react";
import { IStore } from "../store";
import { IAthlete } from "../model";

interface IRankingProps {
  athlete: IAthlete;
}

export class Athlete extends React.Component<IRankingProps> {
    render() {

        const asdf = this.props.athlete.Disciplines.map(r => <div>
            <h1>-----{r.Name}-----</h1>
            <h2>Qualifikation</h2>
            {r.Qualifications.map(d => <div>
                {d.Competition}
                {d.Series.map(s => <div>
                    {s}
                    </div>
                )}
            </div>)}
            <h2>Finals</h2>
            {r.Finals.map(f =>
                <div>
                    {f.Competition}
                    {f.Series.map(s => <div>
                        {s}
                    </div>
                    )}
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

