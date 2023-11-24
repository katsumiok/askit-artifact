// Recompilation count: 0
export function janetBuysABroochFor_82dde6({}: {}): number {
    // Janet buys a brooch for her daughter. She pays $500 for the material to make it and then another $800 for the jeweler to construct it. After that, she pays 10% of that to get it insured. How much did she pay?
    let materialCost: number = 500;
    let constructionCost: number = 800;
    let totalBasicCost: number = materialCost + constructionCost;

    let insuranceCost: number = totalBasicCost * 0.1;

    let totalCost: number = totalBasicCost + insuranceCost;

    return totalCost;
}
