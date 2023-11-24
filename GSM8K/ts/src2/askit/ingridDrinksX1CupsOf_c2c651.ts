// Recompilation count: 0
export function ingridDrinksX1CupsOf_c2c651({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Ingrid drinks 'x1' cups of water every day.  If there are 'x2' cups in a gallon, how many gallons of water does she drink in 'x3' days?
        let totalCupsInDays = x1 * x3; // Calculate how many cups she drink in x3 days.
        let totalGallons = totalCupsInDays / x2; // Calculate how many gallons of water does she drink.

        return totalGallons;
    }
