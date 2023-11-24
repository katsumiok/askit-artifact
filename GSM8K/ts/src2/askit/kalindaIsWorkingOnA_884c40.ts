// Recompilation count: 0
export function kalindaIsWorkingOnA_884c40({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Kalinda is working on a 'x1' piece puzzle with her mom. Kalinda can normally add 'x2' pieces per minute. Her mom can typically place half as many pieces per minute as Kalinda.  How many hours will it take them to complete this puzzle?

    const kalindasSpeed = x2;
    const momsSpeed = x2 / 2;

    const combinedSpeeds = kalindasSpeed + momsSpeed;

    const minutesRequired = x1 / combinedSpeeds;
    const hoursRequired = minutesRequired / 60;

    return hoursRequired;
}
