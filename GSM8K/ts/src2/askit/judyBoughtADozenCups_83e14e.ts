// Recompilation count: 0
export function judyBoughtADozenCups_83e14e({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Judy bought a dozen cups and twice as many dishes as cups to take to the church's charity event. At the event, she found out that her friend had brought 'x1' cups and 'x2' more dishes than she had brought. What's the total number of utensils brought by the two?
        // Number of cups Judy bought
        const judyCups = 12;

        // Number of dishes Judy bought (twice the cups)
        const judyDishes = judyCups * 2;

        // Number of dishes friend bought (judyDishes' count plus x2)
        const friendDishes = judyDishes + x2;

        // Total number of utensils
        return judyCups + judyDishes + x1 + friendDishes;
    }
