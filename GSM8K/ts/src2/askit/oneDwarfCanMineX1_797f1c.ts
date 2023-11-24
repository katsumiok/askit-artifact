// Recompilation count: 0
export function oneDwarfCanMineX1_797f1c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // One dwarf can mine 'x1' pounds of ore per day with his bare hands. 
        // He can mine twice as much with an iron pickaxe 
        let ironPickaxe = 2 * x1;
        
        // and 50% more with a steel pickaxe than with an iron pickaxe.
        let steelPickaxe = 1.5 * ironPickaxe;
        
        // How many pounds of ore can 'x2' dwarves with steel pickaxes mine in a month with 'x3' days?
        return x2 * steelPickaxe * x3;
}
