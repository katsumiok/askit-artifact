// Recompilation count: 0
export function aPirateCrewIsDigging_2f5bcc({}: {}): number {
    // Calculation:
    // We find out the total number of holes dug in the first three days and subtract
    // the number of holes they filled in the third day.
    // Then we multiply the first day's holes by 4 to get the total number of holes dug till the fourth day.
    // The number of holes dug on the fourth day is then this total minus the holes dug in the first three days.
    
    let holesFirstDay = 10;
    let holesSecondDay = 13;
    let holesThirdDay = 8;
    let filledHolesThirdDay = 2;

    let totalHolesFirstThreeDays = holesFirstDay + holesSecondDay + holesThirdDay - filledHolesThirdDay;

    let totalHolesTillFourthDay = 4 * holesFirstDay;
    
    let holesOnFourthDay = totalHolesTillFourthDay - totalHolesFirstThreeDays;

    return holesOnFourthDay; // Expected answer for number of holes dug on the fourth day.
}
