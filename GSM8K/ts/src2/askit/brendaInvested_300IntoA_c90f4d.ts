// Recompilation count: 0
export function brendaInvested_300IntoA_c90f4d({ x1 }: {
    x1: number;
}): number {
  // Simple interest formula: P = P0(1 + rt)
  // Where P0 = initial amount, r = rate of interest, and t = time in years
  let P0 = 300; // initial amount Brenda invested
  let r = 0.75; // rate of interest per year
  let t = x1; // number of years

  // Calculate the total amount Brenda will have after 'x1' years
  let P = P0 * (1 + r*t);
  return P;
}
