// Recompilation count: 1
export function howManyGirlsAreIn_705b64({ x1 }: { x1: number; }): number {
    // How many girls are in the school if 40% of a school population is made up of 'x1' boys?
    // If x1 boys make up 40% of the school, then the total population of the school is x1/0.40
    let totalStudents: number = x1 / 0.40;
    
    // The number of girls will therefore be the total population of the school minus the number of boys
    let girlsCount: number = totalStudents - x1;
    
    return girlsCount;
} 
