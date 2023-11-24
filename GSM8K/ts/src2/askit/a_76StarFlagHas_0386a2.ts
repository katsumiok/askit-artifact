// Recompilation count: 0
export function a_76StarFlagHas_0386a2({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // A 76-star flag has three rows of 'x1' stars, two rows of 'x2' stars and the rest are 'x3'-star rows. How many rows of 'x3' stars are there altogether on the flag?

        // Calculate total number of 'x1' and 'x2' stars
        let totalX1X2Stars = (3 * x1) + (2 * x2);

        // Subtract total 'x1' and 'x2' stars from 76 to find how many stars should be in 'x3' rows
        let remainingStars = 76 - totalX1X2Stars;

        // Since each row has 'x3' stars, we divide remaining stars by 'x3' to get the number of rows
        // Make sure to round down as rows should be a whole number
        let x3Rows = Math.floor(remainingStars / x3);

        return x3Rows;
    }
