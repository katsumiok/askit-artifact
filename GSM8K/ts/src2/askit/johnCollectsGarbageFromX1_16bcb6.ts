// Recompilation count: 0
export function johnCollectsGarbageFromX1_16bcb6({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // John collects garbage from 'x1' different apartment complexes.  The first two have 'x2' apartments each and the last one is 60% bigger than the other two combined.  He collects garbage 'x3' times a week from each place and he gets paid $.40 per collection for each apartment.  How much money does he make in a week?
        let twoComplexes = 2 * x2;
        let biggerComplex = 1.6 * twoComplexes;
        // total number of apartments
        let totalApartments = twoComplexes + biggerComplex;
        // total collections in a week
        let totalCollections = totalApartments * x3;
        // total earnings
        let totalEarnings = totalCollections * 0.4;
        return totalEarnings;
    }
