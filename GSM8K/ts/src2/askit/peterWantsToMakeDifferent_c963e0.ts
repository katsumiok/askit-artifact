// Recompilation count: 0
export function peterWantsToMakeDifferent_c963e0({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        //water required for making giant cubes
        let waterForGiantCubes = x2 * x4;
        //water required for making medium cubes
        let waterForMediumCubes = x3 * x5;
        //water required for making small cubes
        let waterForSmallCubes = 0.5 * x6;
        //calculation of water left
        let remainingWater = x1 - (waterForGiantCubes + waterForMediumCubes + waterForSmallCubes);
        return remainingWater;
    }
