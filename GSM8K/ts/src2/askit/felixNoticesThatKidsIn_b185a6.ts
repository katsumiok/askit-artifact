// Recompilation count: 0
export function felixNoticesThatKidsIn_b185a6({}: {}): number {
    const chargePerBranch = 0.25; // charge per branch
    const earningsInWeek = 105; // earnings in a week
    const daysInWeek = 7; // average number of days in a week

    let totalBranchesInWeek = earningsInWeek / chargePerBranch;
    let averageBranchesPerDay = totalBranchesInWeek / daysInWeek;

    return averageBranchesPerDay;
}
