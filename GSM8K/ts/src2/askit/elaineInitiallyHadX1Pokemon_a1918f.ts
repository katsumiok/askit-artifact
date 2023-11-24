// Recompilation count: 0
export function elaineInitiallyHadX1Pokemon_a1918f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Elaine initially had 'x1' Pokemon cards. 
        let initialCards = x1;

        // After a month, she collected three times that number. 
        let firstMonthCards = 3 * initialCards;

        // In the second month, she collected 'x2' fewer cards than those she collected in the first month. 
        let secondMonthCards = firstMonthCards - x2;

        // In the third month, she collected twice the combined number of pokemon cards she collected in the first and second months. 
        let thirdMonthCards = 2 * (firstMonthCards + secondMonthCards);

        // How many pokemon cards does she have now in total?
        let totalCards = initialCards + firstMonthCards + secondMonthCards + thirdMonthCards;

        return totalCards;
    }
