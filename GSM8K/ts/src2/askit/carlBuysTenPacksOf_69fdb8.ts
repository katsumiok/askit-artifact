// Recompilation count: 0
export function carlBuysTenPacksOf_69fdb8({}: {}): number {
    // Carl buys ten packs of cookies. Each pack of cookies has six cookies inside. Each cookie cost $0.10. How much change does Carl receive if he pay with a $10 bill?
    let totalPacks = 10;
    let cookiesPerPack = 6;
    let costPerCookie = 0.10;
    let moneyPaid = 10;

    let totalCost = totalPacks * cookiesPerPack * costPerCookie;
    let changeReceived = moneyPaid - totalCost;

    return changeReceived;
}
