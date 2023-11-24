// Recompilation count: 0
export function timEntersACompetitioAnd_af9dad({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate the volume of the jar in cubic inches
    const jarVolume = x1 * x2 * x3;

    // Calculate the total number of jelly beans that can fit in the jar
    const totalBeans = jarVolume * 0.80 / 0.15;

    // Calculate the estimated number of red jelly beans
    const estimatedRedBeans = totalBeans * 0.30;

    // Compare it with the true number of red jelly beans, which is 900, and return the difference
    return Math.abs(estimatedRedBeans - 900);
}
