import { observable } from "mobx";
import { IDiscipline, IRanking } from "./model";

export interface IStore {
    disciplines: string[];
    selectedDiscipline: string;
    fetchDisciplinesAsync(): Promise<void>;
    selectDiscipline(discipline: string): void;

    exampleRanking: IRanking;
}

class Store implements IStore {
    @observable
    public disciplines: string[] = [];

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

    public selectDiscipline(discipline: string): void {
        this.selectedDiscipline = discipline;
    }
}

export const store = new Store();
