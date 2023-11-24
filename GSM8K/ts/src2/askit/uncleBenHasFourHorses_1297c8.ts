// Recompilation count: 0
export function uncleBenHasFourHorses_1297c8({}: {}): number {
    // Uncle Ben has four horses. Each horse can consume five pounds of oats per meal. He feeds his horses twice a day. If one bag contains 50-pounds of oats,  how many bags of oats does he need to fed his horses for five days?

    const horses: number = 4;
    const oatsPerMeal: number = 5; // pounds
    const mealsPerDay: number = 2;
    const days: number = 5;
    const oatsPerBag: number = 50; // pounds per bag

    // Calculate total oats consumed by all horses for five days
    const totalOats: number = horses * oatsPerMeal * mealsPerDay * days;
   
    // Calculate how many bags Uncle Ben needs
    const totalBags: number = Math.ceil(totalOats / oatsPerBag);
    
    return totalBags;
}
