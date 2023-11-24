// Recompilation count: 0
export function twoTrackTeamsAreCompeting_440764({ x1, x2, x3, x4, x5, x6, x7, x8 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
    x8: number;
}): number {
    // First team's total time would be 4 times of 'x5' as each member runs their 'x4' meter leg in precisely 'x5' seconds.
    let firstTeamTotalTime: number = 4 * x5;

    // Second team's total time would be sum of 'x7', 'x7' - 'x8', 'x7' - 2*'x8', 'x7' - 3*'x8'
    let secondTeamTotalTime: number = 4 * x7 - 6 * x8;

    // Check which team wins and return the difference
    if ( firstTeamTotalTime < secondTeamTotalTime) {
        return secondTeamTotalTime - firstTeamTotalTime;
    } else {
        return firstTeamTotalTime - secondTeamTotalTime;
    }
}
