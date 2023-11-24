// Recompilation count: 0
export function artemisIsPottingFlowersWith_dc3362({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Artemis is potting flowers with her father. They buy a 30-pound bag of soil. 
    // Each rose needs 'x1' pound. Each carnation needs 1.5 pounds. Each Sunflower needs 'x2' pounds. 
    // If they plant 'x3' sunflowers and 'x4' carnations, how many roses can they plant?

    const totalSoilNeededForSunflowers = x2 * x3; // Calculate the soil needed for sunflowers
    const totalSoilNeededForCarnations = 1.5 * x4; // Calculate the soil needed for carnations
    const totalSoilRemaining = 30 - totalSoilNeededForSunflowers - totalSoilNeededForCarnations; // Determine the remaining soil available

    return totalSoilRemaining / x1;  // Calculate the maximum number of roses that can be planted with the remaining soil
}
