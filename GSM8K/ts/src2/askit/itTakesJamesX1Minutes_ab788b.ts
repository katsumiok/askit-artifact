// Recompilation count: 0
export function itTakesJamesX1Minutes_ab788b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // It takes James 'x1' minutes to read 'x2' pages of his book before he goes to bed. He reads 'x3' pages of his book and then decides to go to sleep. How long does James spend reading, in minutes?
    let minutesPerPage = x1 / x2;
    let totalTime = minutesPerPage * x3;
    return totalTime;
}
