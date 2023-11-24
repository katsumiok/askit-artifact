// Recompilation count: 0
export function aHospitalHasACapacity_89b422({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A hospital has a capacity of 'x1' beds with 1/5 occupied. Due to the coronavirus outbreak, 'x2' patients are admitted into the hospital each day.
    // Calculate the total number of unoccupied beds in the hospital after 'x3' weeks.

    let initiallyOccupiedBeds = x1 / 5; // Calculate initially occupied beds
    let initiallyUnoccupiedBeds = x1 - initiallyOccupiedBeds; // Calculate initially unoccupied beds

    let newPatients = x2 * 7 * x3; // Calculate total new patients after 'x3' weeks.

    // Calculate unoccupied beds after 'x3' weeks
    // If the number of new patients exceeds the number of initially unoccupied beds, return 0.
    return (newPatients > initiallyUnoccupiedBeds) ? 0 : initiallyUnoccupiedBeds - newPatients;
}
