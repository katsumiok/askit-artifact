// Recompilation count: 0
export function fourChildrenArePlayingTogether_b5ba2b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Four children are playing together—Akbar, Alessandro, Helene, and Wilfred. Helene is twice as old as the average age of the group, and the total age of the children is 20. If Akbar is 'x1' years old and Alessandro is 'x2' years old, calculate the age of Wilfred.
    let totalAge = 20;
    let akbarAge = x1;
    let alessandroAge = x2;
    let groupAverageAge = totalAge / 4; 
    let heleneAge = groupAverageAge * 2; 

    let wilfredAge = totalAge - (akbarAge + alessandroAge + heleneAge);

    return wilfredAge;
}
