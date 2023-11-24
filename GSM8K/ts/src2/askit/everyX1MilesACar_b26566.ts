// Recompilation count: 0
export function everyX1MilesACar_b26566({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Every 'x1' miles a car drives the tires rotate 'x2' times.  
    // Jeremy drives 'x3' miles a month.  
    // If each tire can undergo 10,440,000 rotations how many years before the tire needs to be replaced?
  
    const totalRotationsPerMonth = (x3 / x1) * x2;
    const maxRotations = 10440000;
    const monthsBeforeReplacement = maxRotations / totalRotationsPerMonth;
    const yearsBeforeReplacement = monthsBeforeReplacement / 12;

    return yearsBeforeReplacement;
}
