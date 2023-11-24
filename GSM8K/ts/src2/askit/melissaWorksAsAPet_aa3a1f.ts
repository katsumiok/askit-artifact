// Recompilation count: 0
export function melissaWorksAsAPet_aa3a1f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Melissa works as a pet groomer. This week, she has 'x1' dogs that need to be bathed, 
    //'x2' cats that need their nails clipped, 'x3' birds that need their wings trimmed, 
    //and 'x4' horses that need to be brushed. If she splits the grooming jobs evenly over the days, 
    //how many animals will she groom each day of the week?

    let totalPets = x1 + x2 + x3 + x4;
    // Assuming the week is 7 days
    let petsPerDay = totalPets / 7;
    
    return petsPerDay;
}
