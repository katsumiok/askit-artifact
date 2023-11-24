// Recompilation count: 0
export function marthaIsPlanningHerChristmas_0bcd4d({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // calculate the total number of people from each family type
    let totalPeopleFromFamilyTypeOne = x1 * x2;
    let totalPeopleFromFamilyTypeTwo = x3 * x4;

    // calculate the number of people who couldn't come due to other commitments
    let totalPeopleWithOtherCommitments = x5 / 4;

    // calculate the total people who didn't come
    let totalPeopleWhoDidntCome = x5 + totalPeopleWithOtherCommitments;

    // calculate the total number of people who came
    let totalPeopleWhoCame = totalPeopleFromFamilyTypeOne + totalPeopleFromFamilyTypeTwo - totalPeopleWhoDidntCome;

    return totalPeopleWhoCame;
}
