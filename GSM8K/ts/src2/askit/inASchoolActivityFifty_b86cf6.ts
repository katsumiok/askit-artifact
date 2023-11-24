// Recompilation count: 4
export function inASchoolActivityFifty_b86cf6({ x1 }: {
    x1: number;
}): number {
        // In a school activity, fifty-four students are to be separated into six groups of equal size. If the activity requires 'x1' groups, how many more groups are needed to form?
    const totalGroups = 54/6; //6 students in a group
    let groupsNeeded = x1 - totalGroups;

    if (groupsNeeded < 0) {
        groupsNeeded = 0; //if we don't need any more groups
    }
    return groupsNeeded;
}
