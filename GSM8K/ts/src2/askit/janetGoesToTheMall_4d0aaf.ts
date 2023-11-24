// Recompilation count: 0
export function janetGoesToTheMall_4d0aaf({}: {}): number {
        // Janet goes to the mall and spends $3.50 on ice cream, $7.50 each for movie tickets for herself and her younger sister, and $8.50 on a bracelet. If her parents gave her $40, how many dollars does she have left?

        let initialAmount  = 40;
        let iceCreamCost = 3.5;
        let movieTicketCost = 7.5;
        let noOfTickets = 2;
        let braceletCost = 8.5;

        let amountSpent = iceCreamCost + (movieTicketCost * noOfTickets) + braceletCost;
        let amountLeft = initialAmount - amountSpent;

        return amountLeft;
    }
