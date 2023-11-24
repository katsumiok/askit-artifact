// Recompilation count: 0
export function thePopulationOfPorcupinesIn_dd8066({ x1 }: {
    x1: number;
}): number {
    const totalPopulation = 50;
    const females = totalPopulation * 3 / 5;
    const babiesPerYear = x1 * 12;
    const newPorcupinesPerYear = females * babiesPerYear;
    const totalPorcupines = totalPopulation + newPorcupinesPerYear;

    return totalPorcupines; 
}
