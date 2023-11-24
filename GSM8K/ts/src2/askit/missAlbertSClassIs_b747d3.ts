// Recompilation count: 0
export function missAlbertSClassIs_b747d3({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Miss Albert's class is composed of 'x1' boys and 'x2' girls. 
        // One-third of the girls and one-fourth of the boys are on varsity. 
        // How many students are not on varsity?

        // Calculate number of varsity girls and boys
        let varsityGirls = x2 / 3,
            varsityBoys = x1 / 4;

        // Calculate total varsity students
        let totalVarsityStudents = varsityGirls + varsityBoys;

        // Calculate total students
        let totalStudents = x1 + x2;

        // Return number of students not on varsity
        return totalStudents - totalVarsityStudents;
}
