// Recompilation count: 0
export function normanHighSchoolEnrollsAn_36b209({ x1 }: {
    x1: number;
}): number {
    // Norman High School enrolls an average of 'x1' students every year. 
    // Butler High School, the neighboring school, enrolls an average of 3/4 as many students as Norman High School. 
    // How much greater is the average enrollment at Norman High School than the enrollment at Butler High School?
    
    const butlerHighSchoolEnrollsAverage = x1 * (3/4);
    return x1 - butlerHighSchoolEnrollsAverage;
}
