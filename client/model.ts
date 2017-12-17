export interface IResult {
    Competition: string,
    Series: number[]
}

export interface IDiscipline {
    Name: string,
    Results: IResult[]
}

export interface IAthlete {
    Name: string,
    Nationality: string,
    Disciplines: IDiscipline[]
}