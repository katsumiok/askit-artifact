// Recompilation count: 0
export function maddyIsBuyingPizzaFor_ecb0fc({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Maddy is buying pizza for her cousin's soccer game. There are 'x1' team members and 'x2' coaches. Each team member brings 'x3' guests. A pizza will serve 'x4' people. If each pizza costs $15, how many dollars will Maddy spend?
    const totalPeople = x1 + x2 + x1*x3;
    const totalPizza = Math.ceil(totalPeople / x4);
    const cost = totalPizza * 15;
    
    return cost;
}
