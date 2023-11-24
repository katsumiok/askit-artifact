// Recompilation count: 0
export function isabelleBoughtPartySuppliesFor_6027a5({}: {}): number {
    // Define the total costs
    let cakeCost = 12;
    let presentCost = 43;
    let decorationCost = 15;
    let invitationCost = 4;
    let goodieBagsCost = 22;
    
    // Calculate total cost
    let totalCost = cakeCost + presentCost + decorationCost + invitationCost + goodieBagsCost;

    // Divide the total cost by 3 (Isabelle and her two parents)
    let costPerPerson = totalCost / 3;

    // Return the cost per person
    return costPerPerson; 
}
