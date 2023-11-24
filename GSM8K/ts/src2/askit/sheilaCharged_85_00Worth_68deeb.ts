// Recompilation count: 0
export function sheilaCharged_85_00Worth_68deeb({}: {}): number {
    // initial charge
    let total = 85;

    // returned item
    total -= 15;

    // bought frying pan with 20% discount
    let fryingPanPrice = 20;
    fryingPanPrice -= fryingPanPrice * 0.20;
    total += fryingPanPrice;

    // bought a set of towels with 10% off
    let towelSetPrice = 30;
    towelSetPrice -= towelSetPrice * 0.10;
    total += towelSetPrice;

    return total;
}
