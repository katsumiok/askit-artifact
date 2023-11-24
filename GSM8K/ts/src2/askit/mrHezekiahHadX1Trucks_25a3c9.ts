// Recompilation count: 0
export function mrHezekiahHadX1Trucks_25a3c9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // To calculate the total number of tons of fertiliser delivered, we first need to understand that only three quarters (75%) of the trucks successfully delivered their load. 
        // Hence the number of successful trucks deliveries is 0.75 * x1(trucks)
        // The total tons that succeeded in delivering is the number of successful trucks times the tons each truck was carrying.
        let successfulTrucks = 0.75 * x1;
        let totalDeliveredTons = successfulTrucks * x2;
        return totalDeliveredTons;
    }
