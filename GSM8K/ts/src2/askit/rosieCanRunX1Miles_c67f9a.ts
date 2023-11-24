// Recompilation count: 0
export function rosieCanRunX1Miles_c67f9a({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Rosie can run 'x1' miles per hour for 'x2' hours. After that, she runs 'x3' miles per hour. How many miles can she run in 'x4' hours?
    if(x4 <= x2){ // If the total running time is less than or equal the time she runs at first speed
        return x1 * x4; // She will run at first speed for the total time
    }
    else{ // If the total running time is more than the time she runs at first speed
        // She will run at first speed for x2 hours and the remaining time at the second speed.
        return (x1 * x2) + (x3 * (x4 - x2));
    }
}
