// Recompilation count: 0
export function aPhoneTreeIsUsed_eb5d41({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A phone tree is used to contact families and relatives of Ali's deceased coworker. Ali decided to call 'x1' families. Then each family calls 'x2' other families, and so on. How many families will be notified during the fourth round of calls?
    return x1 * Math.pow(x2, 3);
}
