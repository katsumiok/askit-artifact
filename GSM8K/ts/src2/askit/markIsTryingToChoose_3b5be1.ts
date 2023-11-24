// Recompilation count: 0
export function markIsTryingToChoose_3b5be1(): number {
        // Mark is trying to choose between two venues for a surprise party for his wife.  
        // The first venue charges a flat fee of $200, regardless of how many guests attend.  
        // While the second charges, $25 per person who attends.  
        // However, the first venue does not include food, which Mark estimates will cost $5 for each person who attends.  
        // At the second venue, food for each guest is already included in the price.  
        // How many guests are necessary for the two venues to be equal in cost?
        
        const flatFee = 200; // The cost of the first venue 
        const perPersonCostSecondVenue = 25; // The cost per person at the second venue, food included
        const foodCostFirstVenue = 5; // The cost of food per person at first venue 
        
        // We want to find out when total cost for both venues become equal. 
        // If we let 'x' be the number of guests, the equation will be:
        // flatFee + foodCostFirstVenue*x = perPersonCostSecondVenue*x
        // On simplifying this equation, we have:
        // x = flatFee / (perPersonCostSecondVenue - foodCostFirstVenue)
        const numberOfGuests = flatFee / (perPersonCostSecondVenue - foodCostFirstVenue);
        
        return numberOfGuests
    }
