// Recompilation count: 0
export function gisselaGordyAndGaryAre_3bb1bc({ x1 }: {
    x1: number;
}): number {
        // Gissela, Gordy, and Gary are truck drivers.  Gissela has a truck large enough to haul 4,000 pounds of gravel. Gordy's truck can haul 'x1' pounds more than Gissela's truck.  And when Gary brings his truck and joins Gissela and Gordy, the three trucks combined can haul a total of 11,600 pounds of gravel. How many pounds of gravel can Gary's truck carry?

        // calculation
        let gissela_truck_weight = 4000;
        let gordy_truck_weight = gissela_truck_weight + x1;
        let total_truck_weight = 11600;

        // weight Gary's truck can carry = total - (weight of other trucks)
        let gary_truck_weight = total_truck_weight - (gordy_truck_weight + gissela_truck_weight);

        return gary_truck_weight;
    }
