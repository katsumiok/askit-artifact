// Recompilation count: 0
export function anAirConditioneCoolsA_81d2db({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
  //An air conditioner cools a room 'x1' degrees an hour on low and 'x2' degrees an hour on high. 
  //The room will warm up at 'x3' degrees an hour with no air conditioner running. 
  //The air conditioner ran on low for 'x4' hours, then it was turned up to high for 'x5' hours.
  //Afterward, it was turned off for 'x6' hours. 
  //How many degrees lower than the starting temperature was the final temperature?

  //Cooling on low
  let finalTemperature = x1 * x4;

  //Cooling on high
  finalTemperature += x2 * x5;

  //Warming up with no AC running
  finalTemperature -= x3 * x6;

  return finalTemperature;
}
