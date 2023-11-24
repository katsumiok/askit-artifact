// Recompilation count: 0
export function adamReallyWantsToRide_1486e6({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Adam really wants to ride the biggest roller coaster at the park. You have to be 'x1' feet tall to ride it. Adam’s height is 'x2' inches and he grows 'x3' inches a year. How many years until he is tall enough to ride it?
    
    const requiredHeightInInches = x1 * 12; // converting feet to inches

    if (x2 >= requiredHeightInInches) {
        return 0; // Adam is already tall enough to ride the roller coaster
    } else {
        let yearsNeeded = (requiredHeightInInches - x2) / x3;
        return Math.ceil(yearsNeeded); // rounding up as partial year won't count
    }
}
