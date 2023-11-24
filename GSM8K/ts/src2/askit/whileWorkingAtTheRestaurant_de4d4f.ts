// Recompilation count: 0
export function whileWorkingAtTheRestaurant_de4d4f({}: {}): number {
  // Assuming each customer gives same tip.

  // Tips Rafaela received
  const rafaelaTip = 20;
  const numberOfCustomers = 40;
  const totalRafaelaTips = rafaelaTip * numberOfCustomers;
  
  // Julieta received 10% less money in tips than Rafaela.
  const julietaTip = totalRafaelaTips * 0.9;
  
  // Total tips both received
  const totalTip = totalRafaelaTips + julietaTip;
  
  return totalTip;
}

