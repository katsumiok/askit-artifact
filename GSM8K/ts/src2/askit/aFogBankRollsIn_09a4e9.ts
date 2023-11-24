// Recompilation count: 0
export function aFogBankRollsIn_09a4e9({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // A fog bank rolls in from the ocean to cover a city. It takes 'x1' minutes to cover every 'x2' miles of the city. If the city is 'x3' miles across from the oceanfront to the opposite inland edge, how many minutes will it take for the fog bank to cover the whole city?
    let totalMinutes = (x3 / x2) * x1;
    return totalMinutes;
}
