// Recompilation count: 8
export function wendyIsFiveTimesAs_fc0fc4({ x1 }: { x1: number; }): number {
    // Wendy is five times as old as Colin will be seven years from now. 
    // In 'x1' years, Colin will be a third as old as Wendy is now. How old is Colin now?

    // Let's denote Colin's current age as 'c' and Wendy's current age as 'w'.
    // From the problem description, we have the following system of equations:
    // w = 5 * (c + 7)   => w = 5c + 35  (1)
    // c + x1 = w / 3   => w = 3c + 3x1  (2)

    // By equating (1) and (2) we can find 'c':
    // 5c + 35 = 3c + 3x1  => 2c = 3x1 - 35
    
    let colin_current_age = (3 * x1 - 35) / 2;
    return colin_current_age;
}
