// Recompilation count: 0
export function markMakesCustomDogBeds_1b5a43({ x1, x2, x3, x4 }: {
    x1: number;  // stuffing for a Rottweiler bed
    x2: number;  // stuffing for a Chihuahua bed
    x3: number;  // number of Chihuahua beds
    x4: number;  // number of Collie beds
}): number {
    // calculate the average stuffing for a Collie bed
    let collieStuffing = (x1 + x2) / 2;

    // calculate how much stuffing needed for all the beds Mark is making
    let totalStuffing = x2 * x3 + collieStuffing * x4;

    // return the total amount of stuffing needed
    return totalStuffing;
}
