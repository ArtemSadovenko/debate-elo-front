export interface Player{
    id: number,
    elo: number,
    name: string,
    gamesHistoryNew: GameHistory[]
}

export interface GameHistory{
    tournamentName: string,
    eloDif: number,
    team: Team,
    result: number,
    playerK: number,
    roomName: string,
}

export interface Team{
    teamName: string,
    playersNames: string[]
}