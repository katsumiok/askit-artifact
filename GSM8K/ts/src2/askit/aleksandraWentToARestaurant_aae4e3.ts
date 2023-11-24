// Recompilation count: 0
export function aleksandraWentToARestaurant_aae4e3({}: {}): number {
        // Aleksandra went to a restaurant for dinner. She ordered some soup, a bagel, and a piece of cake. The bagel cost $4, and the soup is 25% more. The cake is only half of the price of the bagel. How much did Aleksandra need to pay for the dinner she ordered?
        const bagel: number = 4;
        const soup: number = bagel + (bagel * 0.25);
        const cake: number = bagel / 2;

        return bagel + soup + cake;
    }
