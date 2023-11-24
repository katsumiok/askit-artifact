// Recompilation count: 0
export function mannySignedUpForKarate_fbdf79({ x1 }: {
    x1: number;
}): number {
    // Manny signed up for Karate classes for $60.
    // His parents tell him that if his classes end up costing more than $10 per class, then they won't sign him up again.
    // If there are 'x1' total classes, how many can he miss before they don't sign him up again?

    const totalCost = 60;
    const maxCostPerClass = 10;

    // The number of classes he can attend before the cost per class exceeds $10
    const maxClasses = Math.floor(totalCost / maxCostPerClass);

    // The number of classes he can miss is the total number of classes minus the number of classes he can attend
    const classesHeCanMiss = x1 - maxClasses;

    return classesHeCanMiss;
}
