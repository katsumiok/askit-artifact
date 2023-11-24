// Recompilation count: 0
export function samanthaHasX1FewerPaintings_d2f51d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Samantha has 'x1' fewer paintings than Shelley, and Shelley has 'x2' paintings more than Kim. 
        // If Samantha has 'x3' paintings, how many paintings does Kim have?

        // Since Samantha has 'x1' fewer paintings than Shelley, Shelley has 'x1' more paintings than Samantha
        let shelleyPaintings = x3 + x1;
        // Shelley has 'x2' paintings more than Kim
        let kimPaintings = shelleyPaintings - x2;

        return kimPaintings;
    }
