// Recompilation count: 0
export function siobhanHasX1FewerJewels_794ac6({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Siobhan has 'x1' fewer jewels than Aaron. Aaron has 'x2' more jewels than half of Raymond's jewels. If Raymond has 'x3' jewels, how many jewels does Siobhan have?
        // Calculate half of Raymond's jewels
        let halfOfRaymondsJewels = x3 / 2;
        // Aaron's jewels
        let aaronsJewels = halfOfRaymondsJewels + x2;
        // Siobhan's jewels
        let siobhansJewels = aaronsJewels - x1;
        // Return Siobhan's jewels
        return siobhansJewels;
}
