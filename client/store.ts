import { observable } from "mobx";
import { IDiscipline, IRanking } from "./model";

export interface IStore {
    disciplines: string[];
    selectedDiscipline: string;
    athleteRankings: IRanking[];

    fetchDisciplinesAsync(): Promise<void>;
    selectDiscipline(discipline: string): void;

    exampleRanking: IRanking;
}

class Store implements IStore {
    @observable
    public disciplines: string[] = [];

    @observable
    public athleteRankings: IRanking[] = [];

    @observable
    public selectedDiscipline: string = "";

    public exampleRanking: IRanking = {
        ID: 100,
        Name: 'Iwan Bolzern',
        Nationality: 'CH',
        AvgScore: 605.3,
        AvgSeries: [98, 94, 93, 92],
        Trend: 'up'
    };

    public async fetchDisciplinesAsync(): Promise<void> {
        try {
            const result = await fetch("/disciplines");
            this.disciplines = await result.json();
        } catch (e) {
            this.disciplines = [];
            throw e;
        }
    }

    public async selectDiscipline(discipline: string): Promise<void> {
        this.selectedDiscipline = discipline;

        try {
            const result = await fetch("/athlet-ranking/" + discipline);
            this.athleteRankings = await result.json();
        } catch (e) {
            this.athleteRankings = [];
            throw e;
        }
    }
}

export const store = new Store();
