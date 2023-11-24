// Recompilation count: 0
export function richardLivesInAnApartment_984e75({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Richard lives in an apartment building with 'x1' floors. Each floor contains 'x2' units, and 3/4 of the building is occupied. What's the total number of unoccupied units In the building?

    const totalUnits: number = x1 * x2;
    const occupiedUnits: number = totalUnits * 3 / 4;
    const unoccupiedUnits: number = totalUnits - occupiedUnits;

    return unoccupiedUnits;
}
