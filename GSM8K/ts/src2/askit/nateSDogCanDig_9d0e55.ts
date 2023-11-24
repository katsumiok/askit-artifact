// Recompilation count: 0
export function nateSDogCanDig_9d0e55({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Nate's dog can dig six holes a day. He digs for 'x1' days while Nate is on vacation. When Nate gets home, he starts filling in 'x2' holes a day, but the dog keeps digging 'x3' new holes every night. How many weeks does it take him to fill in all the holes?
    let numOfHolesDogDug = x1 * 6;
    let totalDays = 0;

    while(numOfHolesDogDug > 0) {
        numOfHolesDogDug = numOfHolesDogDug - x2 + x3;
        totalDays++;
    } 

    const totalWeeks = totalDays/7;

    return totalWeeks;
}
