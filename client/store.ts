import { observable } from "mobx";
import { IDiscipline, IRanking, IAthlete } from "./model";

export interface IStore {
    disciplines: string[];
    selectedDiscipline: string;
    athleteRankings: IRanking[];
    selectedAthlete: IAthlete | null;

    fetchDisciplinesAsync(): Promise<void>;
    selectDisciplineAsync(discipline: string): Promise<void>;
    selectAthleteAsync(id: string): Promise<void>;
}

class Store implements IStore {
    @observable
    public disciplines: string[] = [];

    @observable
    public athleteRankings: IRanking[] = [];

    @observable
    public selectedDiscipline: string = "";

    @observable
    public selectedAthlete: IAthlete | null = null;

    public async fetchDisciplinesAsync(): Promise<void> {
        this.disciplines = [];

        try {
            const result = await fetch("/disciplines");
            this.disciplines = await result.json();
        } catch (e) {
            throw e;
        }
    }

    public async selectDisciplineAsync(discipline: string): Promise<void> {
        this.selectedDiscipline = discipline;
        this.athleteRankings = [];

        try {
            const result = await fetch("/athlet-ranking/" + discipline);
            this.athleteRankings = await result.json();
        } catch (e) {
            throw e;
        }
    }

    public async selectAthleteAsync(id: string): Promise<void> {
        this.selectedAthlete = null;

        try {
            const result = await fetch("/athlet/" + id);
            this.selectedAthlete = await result.json();
        } catch (e) {
            throw e;
        }
    }
}

export const store = new Store();
