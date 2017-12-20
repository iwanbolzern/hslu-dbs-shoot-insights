export interface IResult {
    Competition: string,
    Date: string,
    Score: number,
    Series: number[],
    Shoots: number[],
}

export interface IDiscipline {
    Name: string,
    Qualifications: IResult[]
    Finals: IResult[]
}

export interface IAthlete {
    _id: string,
    Bib: string,
    FamilyName: string,
    GivenName: string,
    Organisation: string,
    Disciplines: IDiscipline[]
}

export interface IRanking {
    ID: string,
    Name: string,
    Nationality: string,
    AvgScore: number,
    AvgSeries: number[],
    Trend: string
}
