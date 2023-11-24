// Recompilation count: 0
export function joelleHasX1OrchidsAnd_70d185({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Joelle has 'x1' orchids and 'x2' African daisies on her balcony.  
    // If the orchids have 'x3' petals and daisies have 'x4' petals, 
    // how many more petals do the daisies have compared to the orchids?

    const totalOrchidPetals = x1 * x3;
    const totalDaisyPetals = x2 * x4;

    return totalDaisyPetals - totalOrchidPetals;
}
