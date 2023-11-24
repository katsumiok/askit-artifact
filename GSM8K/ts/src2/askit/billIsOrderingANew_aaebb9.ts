// Recompilation count: 0
export function billIsOrderingANew_aaebb9({}: {}): number {
    // Assuming the towing package is free of cost as it does not cost is mentioned
    const basePrice = 30000;
    const kingCabUpgrade = 7500;
    const leatherSeats = kingCabUpgrade / 3;
    const runningBoards = leatherSeats - 500;
    const upgradedExteriorLightPackage = 1500;
    const totalCost = basePrice + kingCabUpgrade + leatherSeats + runningBoards + upgradedExteriorLightPackage;
    return totalCost;
}
