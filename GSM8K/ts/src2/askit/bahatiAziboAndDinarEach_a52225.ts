// Recompilation count: 1
export function bahatiAziboAndDinarEach_a52225({ x1: totalPoints, x2: diffAzibo, x3: diffDinar }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Bahati, Azibo, and Dinar each contributed to their team's 'totalPoints' points. Bahati scored the most points and it was 'diffAzibo' more than Azibo scored and 'diffDinar' more points than Dinar scored. How many points did Azibo score?
    let bahatiPoints = (totalPoints + diffAzibo + diffDinar) / 3;
    let aziboPoints = bahatiPoints - diffAzibo;
    return aziboPoints;
}
