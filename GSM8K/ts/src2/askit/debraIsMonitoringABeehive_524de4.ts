// Recompilation count: 0
export function debraIsMonitoringABeehive_524de4({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Initial bees that left
    let beesLeft: number = x1;
    
    // Bees that returned after x2 hours
    let beesReturned1: number = beesLeft / 2;
    
    // Bees that left after x3 hours
    let beesLeft2: number = 2 * beesLeft;
    
    // Bees that haven't returned yet
    let beesNotReturned: number = beesLeft + beesLeft2 - beesReturned1;
    
    let lastHours: number = x6;
    
    // We assume that all the bees that hadn't returned yet, return in the last 'x6' hours.
    // This might be more than possible in real life, as there are bees that might have not return in any day.
    // But as the problem doesn't clarify this, we assume the best-case scenario.
    
    if (lastHours > 0 && beesNotReturned > 0) {
        return beesNotReturned;
    }
    
    return 0;
}
