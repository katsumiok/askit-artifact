// Recompilation count: 0
export function christinaIsPlanningABirthday_3ae670({ x1 }: {
    x1: number;
}): number {
    // Christina is planning a birthday party and needs .75 gift bags per invited guest, 
    //because 1/4 of attendees don't show up. She invited 'x1' friends. 
    //Gift bags are $2 each. How much will she spend?
    
    // The number of gift bags she needs is .75 times the number of guests
    let numOfBags = 0.75 * x1;

    // The cost of the gift bags is the number of bags multiplied by the cost per bag
    let cost = numOfBags * 2;
    
    return cost;
}
