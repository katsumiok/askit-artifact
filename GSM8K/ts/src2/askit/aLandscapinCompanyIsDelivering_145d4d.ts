// Recompilation count: 0
export function aLandscapinCompanyIsDelivering_145d4d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // A landscaping company is delivering flagstones to a customer’s yard. Each flagstone weighs 'x1' pounds. If the delivery trucks can carry a total weight of 'x2' pounds, how many trucks will be needed to transport 'x3' flagstones in one trip?
        // total weight of the flagstones is obtained by multiplying the weight of a single flagstone and the number of flagstone
        let totalFlagstoneWeight = x1 * x3;
        // Number of trucks needed to transport the flagstones is obtained by dividing total weight of flagstones by the capacity of a single truck. 
        // We use Math.ceil() to round up to the next whole number, as even if a truck is not completely full, it still counts as a truck.
        let no_of_trucks = Math.ceil(totalFlagstoneWeight / x2);
        return no_of_trucks;
}
