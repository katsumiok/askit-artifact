// Recompilation count: 1
export function morganSDadSaidThat_0ffaed({}: {}): number {
    const budget: number = 90;
    const costPerPerson: number = 5 + 5 + 2 * 10;
    const numberOfPeople: number = Math.floor(budget / costPerPerson);
    return numberOfPeople - 1; // since 'numberOfPeople' includes Morgan herself
}
