// Recompilation count: 0
export function miaAndEmmaAreCurrently_79efd4({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Mia and Emma are currently 'x1' years apart in age. If Mia, who is younger than Emma, is 'x2' years old, what's the average of their ages?
    let miaAge = x2; // Mia's age is 'x2'
    let emmaAge = miaAge + x1; // Emma is 'x1' years older than Mia
    let avgAge = (miaAge + emmaAge) / 2; // Average age is sum of their ages divided by 2
    return avgAge;
}
