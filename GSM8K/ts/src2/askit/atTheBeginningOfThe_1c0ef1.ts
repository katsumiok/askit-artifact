// Recompilation count: 0
export function atTheBeginningOfThe_1c0ef1({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // At the beginning of the party, there were 'x1' men and 'x2' women. After an hour, 1/4 of the total number of people left. 
        //How many women are left if 'x3' men stayed at the party?
        const totalPeople = x1 + x2;
        const peopleLeft = totalPeople - (totalPeople / 4); //total people after 1/4 left
        const womenLeft = peopleLeft - x3; //Subtract the men who stayed from the people left to get the number of women who stayed.
        return womenLeft;
    }
