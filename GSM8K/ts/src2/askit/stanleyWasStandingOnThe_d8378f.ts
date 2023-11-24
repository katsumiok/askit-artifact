// Recompilation count: 0
export function stanleyWasStandingOnThe_d8378f({}: {}): number {
  // Stanley's initial elevation
  const stanley_elevation: number = 10000;

  // The distance the comb fell
  const comb_fall: number = 4000;

  // Oliver's initial elevation
  const oliver_elevation: number = 3000;

  // Final elevation of comb
  const comb_elevation = stanley_elevation - comb_fall;

  // If comb fell below Oliver's elevation, no climbing required
  if (comb_elevation <= oliver_elevation) {
    return 0;
  }
  
  // Calculate required climbing distance
  const climbing_required = comb_elevation - oliver_elevation;

  return climbing_required;
}
