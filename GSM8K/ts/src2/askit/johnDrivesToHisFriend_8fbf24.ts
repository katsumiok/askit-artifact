// Recompilation count: 0
export function johnDrivesToHisFriend_8fbf24({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
  // Distance to friend's house with detour
  let distanceToFriend = x1 + x3;
  // Time to friend's house 
  let timeToFriend = distanceToFriend / x2;
  // Time to back home
  let timeToHome = x4 / x5;
  // Total time
  let totalTime = timeToFriend + timeToHome;
  return totalTime;
}
