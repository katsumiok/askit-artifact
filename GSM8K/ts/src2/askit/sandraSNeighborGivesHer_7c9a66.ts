// Recompilation count: 0
export function sandraSNeighborGivesHer_7c9a66({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number { 
    let totalEggsNeeded = x2 * x3;
    let timesToBabysit = Math.ceil(totalEggsNeeded / x1);
    return timesToBabysit;
}
