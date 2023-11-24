// Recompilation count: 0
export function aShopSellsSchoolSupplies_bffdce({}: {}): number {

    // Define Cost of each item 
    const cost_notebook = 1.50; 
    const cost_pen = 0.25; 
    const cost_calculator = 12; 
    const cost_geometrySet = 10;
    
    // Quantity of each items
    const qty_notebook = 5; 
    const qty_pen = 2; 
    const qty_calculator = 1; 
    const qty_geometrySet = 1; 
    
    // Total cost without discount
    const totalCostWithoutDiscount = (cost_notebook * qty_notebook) + (cost_pen * qty_pen) + (cost_calculator * qty_calculator) + (cost_geometrySet * qty_geometrySet);
    
    // Discount
    const discount = 0.1; 
    
    // Total Cost after discount 
    const totalCost = totalCostWithoutDiscount - (discount * totalCostWithoutDiscount); 
    
    return totalCost;
}
