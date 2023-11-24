// Recompilation count: 0
export function inTheFirstWeekJudy_2fdabf({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // In the first week, Judy read for 'x1' minutes each night before going to sleep. 
    // In the second week, she read a total of 'x2' pages. 
    // If she can read 'x3' pages per 1.5 minutes, how many pages did she read in two weeks?
    
    //Firstly, we need to know how many minutes she read in the first week
    let weekMinutes = x1 * 7; // As there are 7 nights in a week.

    //Then we have to calculate how many pages she read in the first week.
    let firstWeekPages = (weekMinutes / 1.5) * x3; //As she reads 'x3' pages every 1.5 minutes.

    // Finally, we add the pages she read in the second week to obtain the total.
    let totalPages = firstWeekPages + x2;

    return totalPages;
}
