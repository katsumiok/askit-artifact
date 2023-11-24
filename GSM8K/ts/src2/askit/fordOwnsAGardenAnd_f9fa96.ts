// Recompilation count: 0
export function fordOwnsAGardenAnd_f9fa96({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Ford owns a garden and he grows 'x1' roses every week. He supplies Roses to the local flower shops. 
        // The first flower shop orders 'x2' roses, the second flower shop orders 'x3' roses, and the third flower shop orders 'x4' roses per week. 
        // How many roses does Ford lack to supply all the flower shops every month?

        // Calculate total roses Ford grows in a month
        let totalRosesGrown = x1 * 4; // Assuming a month has 4 weeks

        // Calculate total roses ordered by the flower shops in a month
        let totalRosesOrdered = (x2 + x3 + x4) * 4; 

        // Calculate the lack of roses Ford has
        let lackOfRoses = totalRosesOrdered - totalRosesGrown;

        // If Ford grows enough roses, the lackOfRoses will be negative. In this case, return 0;
        return lackOfRoses > 0 ? lackOfRoses : 0; 
    }

