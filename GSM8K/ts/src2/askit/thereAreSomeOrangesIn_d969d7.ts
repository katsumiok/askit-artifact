// Recompilation count: 0
export function thereAreSomeOrangesIn_d969d7({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    const totalMinutes = 60;
    let anaOrangeCount = Math.floor(totalMinutes / x1);
    let janeOrangeCount = Math.floor(totalMinutes / x2);
    
    return anaOrangeCount - janeOrangeCount;
}
