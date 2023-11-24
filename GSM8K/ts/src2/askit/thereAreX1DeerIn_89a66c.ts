// Recompilation count: 0
export function thereAreX1DeerIn_89a66c({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // There are 'x1' deer in a field. 'x2' percent of them are bucks. 'x3' percent of the bucks are 'x4' points.  How many 'x5' point bucks are there?
        const bucks = x1 * (x2 / 100); 
        const x4PointBucks = bucks * (x3 / 100);
        const x5PointBucks = (x4 / x5) * x4PointBucks;
        return x5PointBucks;
    }

