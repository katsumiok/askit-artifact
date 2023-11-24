// Recompilation count: 0
export function checkIfYIsA_c648f9({ y }: {
    y: number;
}): boolean {
    // Check if 'y' is a leap year.
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}
