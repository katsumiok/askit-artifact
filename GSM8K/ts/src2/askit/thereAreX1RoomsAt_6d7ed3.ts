// Recompilation count: 0
export function thereAreX1RoomsAt_6d7ed3({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // There are 'x1' rooms at the KozyInn Motel. It takes housekeeping 'x2' minutes to clean each room. 
  // How many hours would it take to clean one-half of the rooms?
  
  let totalRooms = x1 / 2; // total rooms to clean is half of x1
  let totalMinutes = totalRooms * x2; // total minutes to clean is the total rooms multiplied by the amount of minutes it takes to clean each room
  let totalHours = totalMinutes / 60; // convert total minutes to hours
  return totalHours;
}
