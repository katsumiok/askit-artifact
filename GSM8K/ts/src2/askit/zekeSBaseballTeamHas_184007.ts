// Recompilation count: 0
export function zekeSBaseballTeamHas_184007({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Zeke's baseball team has 'x1' more players than Carlton's. If Carlton's team has 'x2' players, how many players are there in both teams combined?
    let carltonTeam = x2;
    let zekeTeam = x2 + x1;
    return carltonTeam + zekeTeam;
}
