// Recompilation count: 0
export function danaCanRunAtA_f2deba({ x1 }: { x1: number; }): number {
    const runningSpeed = x1 * 2;
    const walkingSpeed = runningSpeed / 4;
    const totalHours = 6;
  
    const runningTime = totalHours / 3;
    const walkingTime = totalHours * 2 / 3;
  
    const runningDistance = runningSpeed * runningTime;
    const walkingDistance = walkingSpeed * walkingTime;
  
    return runningDistance + walkingDistance;
}
