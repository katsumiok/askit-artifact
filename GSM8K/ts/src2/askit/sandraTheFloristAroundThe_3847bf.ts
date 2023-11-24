// Recompilation count: 0
export function sandraTheFloristAroundThe_3847bf({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Given that the pink calla lilies were five times the number of white carnations, 
    // we can find the number of white carnations by dividing x1 by 5
    let whiteCarnations: number = x1/5;

    // Sandra had ordered four times as many red roses as white carnations.
    // Therefore, the number of red roses she ordered is four times the number of white carnations
    let redRoses: number = 4 * whiteCarnations;

    // As x2 and x3 define the delivery times and don't affect the number of roses,
    // return the number of red roses that need to be delivered
    return redRoses;
    }
