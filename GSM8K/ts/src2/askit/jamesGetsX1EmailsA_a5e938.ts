// Recompilation count: 0
export function jamesGetsX1EmailsA_a5e938({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    const emailsWithoutResponse = 0.2 * x1; 
    const emailsToRespond = x1 - emailsWithoutResponse;
    // Number of emails he responds in a 'x2' day work week.
    return emailsToRespond * x2; 
}
