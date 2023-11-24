// Recompilation count: 0
export function hannahSCityIsHaving_72593f({ x1, x2, x3, x4 }: {
  x1: number;
  x2: number;
  x3: number;
  x4: number;
}): number {
  // Calculate the total amount of fireworks city will set off
  const cityFireworks = x1 * x2;
  
  // Calculate the amount of fireworks Hannah will see from the city's display
  const hannahsViewOfCityFireworks = cityFireworks * 0.4;

  // Calculate the total amount of fireworks Hannah will set off in her backyard
  const hannahsBackyardFireworks = x3 * x4;
  
  // Calculate the total amount of fireworks Hannah will see
  const totalFireworksHannahWillSee = hannahsViewOfCityFireworks + hannahsBackyardFireworks;

  return totalFireworksHannahWillSee;
}
