// Recompilation count: 0
export function dominickWentToHisTeam_0c2389({ x1 }: {
    x1: number;
}): number {
        // Dominick went to his team's changing room and saw half as many robots as helmets and half as many helmets as footballs kept there. If there were 'x1' helmets, calculate the total number of items Dominick saw.
    let robots = x1 / 2;
    let footballs = x1 * 2;
    // total items = helmets + robots + footballs
    let totalItems = robots + footballs + x1;

    return totalItems;
    }
