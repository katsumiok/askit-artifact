// Recompilation count: 0
export function tomSRestaurantGetsX1_43fb95({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Tom's restaurant gets 'x1' reservations a night.  They normally order 'x2' meals that cost $5 each and a $5 bottle of wine.  
        // How much do they make a week if they are open 'x3' days a week?
        let perNightIncome = x1 * (x2 * 5 + 5); // each customer orders 'x2' $5 meals and one $5 bottle of wine
        let weeklyIncome = perNightIncome * x3; // the restaurant is opened 'x3' days a week 
        return weeklyIncome;
    }
