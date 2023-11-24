// Recompilation count: 0
export function shawndaDecidesThatHerNeighborho_39739c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Shawnda decides that her neighborhood kids could really use a bike inflation service. 
        // She decides the best way to charge is by the tire. 
        // Each tire costs 'x1' cents to inflate. 
        // On the first day, 'x2' people on bicycles came by to get both tires inflated. 'x3' people came by to get all their tricycle tires inflated. 
        // Finally, one person actually came by on a unicycle. 
        // How many dollars did she make that day?
        
        //calculating total cents made by Shawnda
        let totalCents = x1 * ((2 * x2) + (3 * x3) + 1);
        
        //converting cents to dollars
        let totalDollars = totalCents / 100;

        return totalDollars;
  }
