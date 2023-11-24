// Recompilation count: 0
export function toulaWentToTheBakery_581a9c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
     // Toula went to the bakery and bought various types of pastries. She bought 'x1' dozen donuts which cost $68 per dozen, 'x2' dozen mini cupcakes which cost $80 per dozen, and 'x3' dozen mini cheesecakes for $55 per dozen. How much was the total cost?
     let costOfDonuts = x1 * 68;
     let costOfCupcakes = x2 * 80;
     let costOfCheesecakes = x3 * 55;
     
     // return the total cost
     return costOfDonuts + costOfCupcakes + costOfCheesecakes;
}
