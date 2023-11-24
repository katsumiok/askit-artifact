// Recompilation count: 0
export function inAStudentCouncilElection_193ab6({ x1 }: {
    x1: number;
}): number {
    // In a student council election, candidate A got 20% of the votes while candidate B got 50% more than candidate A's votes. The rest of the votes was given to candidate C. If there were 'x1' voters, how many votes did candidate C get?
    
    const votesForA = x1 * 0.2; // Candidate A got 20%
    const votesForB = votesForA * 1.5; // Candidate B got 50% more votes than candidate A
    const votesForC = x1 - votesForA - votesForB; // The rest of the votes went to candidate C

    return votesForC;
}
