// Recompilation count: 0
export function marcusIsTryingToDecide_985530({}: {}): number {
    // There's a 50% chance substitute teacher will come and won't collect the homework
    let chanceNotCollectedBySubstitute = 0.5;

    // If the normal teacher comes in, there's a 40% chance everyone will get an extension
    let chanceOfExtension = 0.4;

    // If no general extension is given, there's a 20% chance Marcus can convince the teacher his dog ate his assignment
    let chanceOfPersonalExtension = 0.2;

    // Calculate the chance that homework will actually be collected
    let chanceHomeworkCollected = (1 - chanceNotCollectedBySubstitute) * (1 - chanceOfExtension) * (1 - chanceOfPersonalExtension);

    // Convert to percentage
    let percentage = chanceHomeworkCollected * 100;

    return percentage;
}
