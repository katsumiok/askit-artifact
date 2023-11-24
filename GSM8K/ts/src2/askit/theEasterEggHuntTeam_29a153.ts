// Recompilation count: 0
export function theEasterEggHuntTeam_29a153({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // The Easter egg hunt team hid 'x1' eggs. 
  // The Smith twins each found 'x2' eggs.
  // All the other eggs except 'x3' were found by their friends. 
  // How many eggs did the friends find?
  
  // Calculate total eggs found by Smith twins
  const eggsFoundBySmithTwins = x2 * 2;
  
  // Calculate eggs found by friends
  const eggsFoundByFriends = x1 - eggsFoundBySmithTwins - x3;
  
  return eggsFoundByFriends;
}
