// Recompilation count: 0
export function theRestaurantHasX1Normal_5cfa45({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // The restaurant has 'x1' normal chairs and 'x2' chairs for babies. 
        // If 'x3' of the normal chairs and 'x4' of the baby chairs were sent to the carpenter for repair, 
        // how many chairs does the restaurant have left?
        return (x1 - x3) + (x2 - x4);
    }
