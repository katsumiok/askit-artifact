// Recompilation count: 0
export function itSStrawberryPickingTime_86ab88({ x1 }: {
    x1: number;
}): number {
  // Tony can pick 'x1' quarts per hour
  let tony = x1;
  // Bobby picks one less quart per hour than Tony
  let bobby = tony - 1;
  // Kathy can pick twice as many strawberries per hour as Bobby
  let kathy = bobby * 2;
  // Ricky picks two less quarts per hour than Kathy
  let ricky = kathy - 2;

  // Total quarts they pick per hour is sum of individual quarts picked per hour by each
  let total = tony + bobby + kathy + ricky;

  return total;
}
