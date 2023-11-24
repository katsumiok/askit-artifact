// Recompilation count: 0
export function drHugoGrumpusAndHis_1bb155({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate how many test tubes Igor gathered
    let testTubesGathered = x1 / 2;

    // Calculate how many beakers Igor gathered
    let petriDishesGathered = x3 + 2;

    // Assumed total number of items placed in the lab.
    let totalItemsInLab = 29;
   
    // Calculate how many beakers Igor has lost using the totalItemsInLab subtracted by the other items gathered
    let beakerLoss = x2 - (totalItemsInLab - (testTubesGathered + petriDishesGathered));
    
    return beakerLoss;
}
