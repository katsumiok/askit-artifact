// Recompilation count: 0
export function teresaSellsLargeStuffedAnimals_464bef({}: {}): number {
    // Teresa sells large stuffed animals for three times the price of small stuffed animals. Today, she sold twice as many small stuffed animals as large ones and earned $120 from the sales. Each small stuffed animal costs $4. How many small stuffed animals did she sell?

    // cost of each large stuffed animal
    const largePrice = 4 * 3;
    
    // Let's define the number of large stuffed animals that Teresa sold as x
    // Since she sold twice as many small stuffed animals as large ones, the number of small stuffed animals she sold is 2x
    
    // We know that she earned $120 from the sales, and each large stuffed animal costs three times the price of small stuffed animal
    // Therefore, the total earnings equation is: 4 * 2x + largePrice * x = 120

    // We can solve this equation to find the value of x, that'll be the number of large stuffed animals. To find the number of small ones, we multiply it by 2.

    const numberOfLargeAnimals = 120 / (4 * 2 + largePrice);
    const numberOfSmallAnimals = numberOfLargeAnimals * 2;

    // Return the number of small stuffed animals sold
    return numberOfSmallAnimals;
}
