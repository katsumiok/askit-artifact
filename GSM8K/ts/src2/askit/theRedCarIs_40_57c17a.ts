// Recompilation count: 0
export function theRedCarIs_40_57c17a({}: {}): number {
  // The red car is 40% cheaper than the blue car. The price of the blue car is $100. How much do both cars cost?
  
  const priceBlueCar: number = 100;
  const priceRedCar: number = priceBlueCar - (priceBlueCar * 0.4);
  
  const totalCost: number = priceBlueCar + priceRedCar;
  
  return totalCost;
}
