// Recompilation count: 0
export function aliceIsX1YearsOlder_3789dd({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Alice is 'x1' years older than Beth, who is 'x2' years older than Erica. What is the difference between the ages of Alice and Erica, if Erica is 'x3' years old?
    const ageOfBeth = x3 + x2;
    const ageOfAlice = ageOfBeth + x1;
    const ageDifferenceAliceErica = ageOfAlice - x3;
    return ageDifferenceAliceErica;
}
