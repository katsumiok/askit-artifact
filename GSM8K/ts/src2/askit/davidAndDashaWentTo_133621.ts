// Recompilation count: 0
export function davidAndDashaWentTo_133621({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // David and Dasha went to the carnival, where there are 'x1' rides. Each ride costs 'x2' ride tickets at $2 per ticket. 
       // You can also buy a ride bracelet for $30 which gives you 'x3' rides. 
       // If David buys a ride bracelet and Dasha buys tickets, and they ride all 'x4' rides, how much money does David save?

       // Calculate the cost of tickets that Dasha buys
       let dashaCost = x4 * x2 * 2; 

       // David buys a ride bracelet at $30
       let davidCost = 30;

       // Calculate how much money David saves
       let saving = dashaCost - davidCost;

       return saving;
    }
