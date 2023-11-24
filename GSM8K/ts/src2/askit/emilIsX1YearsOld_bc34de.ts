// Recompilation count: 0
export function emilIsX1YearsOld_bc34de({ x1 }: {
    x1: number;
}): number {
    // Emil is 'x1' years old now. When he turns 24, he will be half the age of his dad but twice as old as his brother.  What is the sum of the ages of his dad and his brother now?
    const yearsUntilEmilIs24 = 24 - x1;

    // When Emil turns 24, he will be half the age of his dad.
    const dadsAgeWhenEmilIs24 = 24 * 2;
    const dadsCurrentAge = dadsAgeWhenEmilIs24 - yearsUntilEmilIs24;

    // When Emil turns 24, he will be twice as old as his brother.
    const brothersAgeWhenEmilIs24 = 24 / 2;
    const brothersCurrentAge = brothersAgeWhenEmilIs24 - yearsUntilEmilIs24;

    // The sum of the ages of his dad and his brother now.
    return dadsCurrentAge + brothersCurrentAge;
}
