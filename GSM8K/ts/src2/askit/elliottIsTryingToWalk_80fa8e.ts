// Recompilation count: 0
export function elliottIsTryingToWalk_80fa8e({}: {}): number {
  // This question can be solved by simple math and subtraction.
  // First calculate half of Elliott's daily goal, which is 10,000 / 2 = 5,000 steps.
  let stepsHalf = 10000 / 2;
  // Then subtract from this the steps Elliott did with his friend: 5,000 - 1,000 = 4,000 steps.
  stepsHalf -= 1000;
  // Now, Elliott realized he only had 2,000 steps left after his jog.
  // So, the steps he took during his jog equals the steps before his jog (4,000 steps) minus the steps he still had left (2,000 steps).
  let stepsDuringJog = stepsHalf - 2000;
  // Return the steps he took during his jog.
  return stepsDuringJog;
}
