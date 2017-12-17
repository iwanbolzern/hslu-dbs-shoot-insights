import { observable } from "mobx";
import { IDiscipline } from "./model";

export interface IStore {
    disciplines: string[];
    selectedDiscipline: string;
    fetchDisciplinesAsync(): Promise<void>;
    selectDiscipline(discipline: string): void;
}

class Store implements IStore {
    @observable
    public disciplines: string[] = [];

    @observable
    public selectedDiscipline: string = "";

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
