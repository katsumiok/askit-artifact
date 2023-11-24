// Recompilation count: 0
export function asSallyWalkedToSchool_a135f5({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // As Sally walked to school, she was holding the strings to 'x1' red balloons, 'x2' green balloons, and 'x3' yellow balloons. 
        // Suddenly, a gust of wind caused 40% of the red balloons to burst.
        let red = x1 - x1 * 0.40;
        
        // The shockingly loud sound startled Sally, and she accidentally released half of the yellow balloons.
        let yellow = x3 / 2;
        
        // But as she neared the school grounds, she found 'x4' blue balloons caught in a tree, and she added 75% of them to her remaining clutch of balloons
        let blue = x4 * 0.75;
        
        // Which she carried into the school.  What number of balloons did she finally carry into the school?
        let total = red + x2 + yellow + blue;

        return total;
}
