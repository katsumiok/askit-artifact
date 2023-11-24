// Recompilation count: 0
export function bethanyCanRunX1Laps_7ab1aa({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Bethany can run 'x1' laps on the track in one hour.  
    let bethanyLaps = x1;
    
    // Trey can run 'x2' more laps than Bethany. 
    let treyLaps = bethanyLaps + x2;

    // Shaelyn can run half as many laps as Trey.  
    let shaelynLaps = treyLaps / 2;

    // Quinn can run 'x3' fewer laps than Shaelyn.
    let quinnLaps = shaelynLaps - x3;

    // How many more laps can Bethany run compared to Quinn?
    let lapsDifference = bethanyLaps - quinnLaps;
    
    return lapsDifference;
}
