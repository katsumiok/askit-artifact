// Recompilation count: 0
export function jonathanHas_2_3As_e4e426({ x1 }: {
    x1: number;
}): number {
  // Jonathan has 2/3 as many measuring spoons as measuring cups. If he has two dozen cups and gifts Pedro 'x1' measuring spoons for his birthday, calculate the total number of utensils Jonathan has remaining.
  
  // Define the total number of cups Jonathan has initially
  let totalCups: number = 24;

  // Calculate total spoons Jonathan has initially using the 2:3 spoons-to-cups ratio
  let totalSpoons: number = (2 / 3) * totalCups; 

  // Subtract the 'x1' spoons gifted to Pedro from the total spoons
  let remainingSpoons: number = totalSpoons - x1;

  // Add the remaining spoons and cups to get the total utensils
  let totalUtensils: number = remainingSpoons + totalCups;

  return totalUtensils;

}
