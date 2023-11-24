// Recompilation count: 0
export function tanyaIsTeachingAtSchool_17f4a7({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // hourly rate 
    const hourlyRate: number = 15;

    // bonus rate per day
    const bonus: number = 5;

    // total earning will be calculated and stored here
    let totalEarning: number = 0;

    // for Monday 
    totalEarning += hourlyRate * x3; // calculating earning based on hourly rate
    if(x2 > x1) { // if she teaches more than x1 class, she get bonus
        totalEarning += bonus;
    }

    // for Wednesday 
    totalEarning += hourlyRate * x5; // calculating earning based on hourly rate
    if(x4 > x1) { // if she teaches more than x1 class, she get bonus
        totalEarning += bonus;
    }

    // return totalEarning
    return totalEarning;
}
