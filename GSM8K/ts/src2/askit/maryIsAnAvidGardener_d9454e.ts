// Recompilation count: 0
export function maryIsAnAvidGardener_d9454e({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    let totalExistingPlants = x2 * x3; // Calculate total potted plants already with Mary on all ledges
    let totalPlantsAfterAddition = totalExistingPlants + x1; // Add the new potted plants received by Mary
    let totalPlantsToGiveAway = x4 * x3; // Calculate the total plants she will give away from all ledges
    let remainingPlants = totalPlantsAfterAddition - totalPlantsToGiveAway; // Subtract the total plants to give away from the total plants after addition

    return remainingPlants; // Return the remaining total plants
}
