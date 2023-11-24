// Recompilation count: 0
export function kylieAndRobertEnjoyGoing_aae03b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
   // Kylie and Robert enjoy going to the beach to collect shells. On Monday, Kylie collects 'x1' more shells than Robert, who collects 'x2' shells. On Tuesday, Kylie collects 'x3' times more shells than she did on Monday. How many shells does Kylie collect on Tuesday?
   const mondayKylieShellCount: number = x1 + x2;
   const tuesdayShellCount: number = mondayKylieShellCount * x3;
   return tuesdayShellCount;
}
