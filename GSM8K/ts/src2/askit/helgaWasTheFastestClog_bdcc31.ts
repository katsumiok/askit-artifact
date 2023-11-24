// Recompilation count: 0
export function helgaWasTheFastestClog_bdcc31({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
       // Calculate the total taps when Helga's arms are down
       let tapsArmsDown = ((x1 + x2) * (x4 - x5));
      
       // Calculate the total taps when Helga's arms are raised
       let tapsArmsUp = ((2 * x3) * x5);
      
       // Return combined total number of taps for both situations
       return tapsArmsDown + tapsArmsUp;
}
