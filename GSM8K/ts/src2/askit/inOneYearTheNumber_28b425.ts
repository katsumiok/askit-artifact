// Recompilation count: 0
export function inOneYearTheNumber_28b425({ x1 }: {
    x1: number;
}): number {
        // In one year, the number of students on campus doubles at the end of every month. If there are 'x1' students on campus at the beginning of the year, how many additional students would have joined by the end of May, above and beyond the number of students already on campus at the beginning of the year?
    let totalAtEndOfMay = x1;
    for(let i=0; i<5; i++) // January through May = 5 months
    {
        totalAtEndOfMay *= 2; // Number of students doubles at the end of every month
    }

    let additional = totalAtEndOfMay - x1; // Subtracting initial number of students to get the additional number
    return additional;
    }
