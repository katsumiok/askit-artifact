// Recompilation count: 0
export function donnyCanOnlyDrinkWater_1daa00({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // considering that the total amount of water in donny's bottle is (x3+1),
        // and the temperature should be larger than x1 for donny to drink,
        // the minimal temperature of the second bottle can be calculated by following calculation.
        let minimal_temperature = ((x1 * (x3 + 1)) - (x2 * x3));
        return minimal_temperature;
    }
