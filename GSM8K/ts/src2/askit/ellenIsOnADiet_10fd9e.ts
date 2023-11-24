// Recompilation count: 0
export function ellenIsOnADiet_10fd9e({}: {}): number {
        // Ellen is on a diet. She eats two carrots, a salad, and a yogurt every day. The salad costs her $6, while the yogurt is half the price. How much does Ellen pay for one carrot every day when in total she pays $11 for her goods?

        // cost of the salad is $6
        let saladCost: number = 6;
      
        // yogurt is half the price of the salad
        let yogurtCost: number = saladCost / 2;
      
        // total cost of the goods
        let totalCost: number = 11;
      
        // The cost of two carrots is the total cost minus the cost of the salad and yogurt
        // So, cost of one carrot is half of the cost of two carrots
        let carrotCost: number = (totalCost - saladCost - yogurtCost) / 2;
        
        return carrotCost;
    }
