// Recompilation count: 0
export function ritaHandPicksJunebugsOff_f6891e({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  let monday = x1; 
  let tuesday = 2 * x1; 
  let wednesday = 2 * x1; 
  let thursday = x2; 
  let friday = 57; 

  let total = monday + tuesday + wednesday + thursday + friday;
  
  return total / 5; // Average number of Junebugs that she removes per day
}
