// Recompilation count: 0
export function johnTakesCareOfX1_1e8747({ x1 }: {
    x1: number;
}): number {
    // John takes care of 'x1' dogs.  Each dog takes .5 hours a day to walk and take care of their business.  How many hours a week does he spend taking care of dogs?
    let hoursPerDay = x1 * 0.5;
    let hoursPerWeek = hoursPerDay * 7;
    return hoursPerWeek;
}
