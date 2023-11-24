// Recompilation count: 0
export function sittiAndJurisBoughtX1_7fbba2({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
   // Sitti and Juris bought 'x1' and 'x2' oranges, respectively. If both of them decide to share them equally with their 'x3' other friends, 
   // then everyone will get an equal share of the total oranges
   // Total oranges = x1 (oranges bought by Sitti) + x2 (oranges bought by Juris)
   // Total persons = 2 (Sitti and Juris) + x3 (other friends)
   // So, every person will get (x1 + x2) / (2 + x3) oranges
   let totalOranges = x1 + x2;
   let totalPersons = 2 + x3;

   return totalOranges / totalPersons;
}
