// Recompilation count: 0
export function hallieHadDancePracticeFor_a0d3af({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Hallie had dance practice for 'x1' hour on Tuesdays and 'x2' hours on Thursdays.  
    // On Saturdays, she had dance practice that lasted twice as long as Tuesday's night class.  
    // How many hours a week did she have dance practice?

    let Tuesdays = x1;
    let Thursdays = x2;
    let Saturdays = 2 * x1;
    
    let totalHours = Tuesdays + Thursdays + Saturdays;
    
    return totalHours;
}
