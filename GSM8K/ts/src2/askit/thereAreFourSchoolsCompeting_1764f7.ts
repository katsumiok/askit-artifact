// Recompilation count: 0
export function thereAreFourSchoolsCompeting_1764f7({ x1 }: {
    x1: number;
}): number {
        // There are four schools competing at a basketball tournament. Each school has sent a girls’ basketball team and a boys’ basketball team and each team has 'x1' players each. Each school has also sent a coach for each team. In total, how many people have all of the schools sent?
    let teamsPerSchool = 2; // girls' team + boys' team
    let coachesPerTeam = 1; // each team has a coach
    let schools = 4; // four schools are participating

    return schools * ((x1 * teamsPerSchool) + (coachesPerTeam * teamsPerSchool));
}

