// Recompilation count: 0
export function ruizCanMakeX1Pounds_e97154({ x1, x2 }: { x1: number; x2: number; }): number {
      // Ruiz can make 'x1' pounds of chocolates in two hours. 
      // Marissa makes 3/4 times as many pounds of chocolates in an hour as Ruiz makes in the two hours. 
      // If they worked for 'x2' hours in a day, calculate the total amount of chocolate pounds they made together.

      // Ruiz makes 'x1' pounds every 2 hours, so in 'x2' hours Ruiz produces:
      let ruizProduction = (x1 / 2) * x2;

      // Marissa makes 3/4 times as many pounds of chocolates in an hour as Ruiz makes in 2 hours, 
      // so in 'x2' hours Marissa produces:
      let marissaProduction = ((3 / 4) * x1) * x2;

      // The total pounds of chocolate they made together is the sum of Ruiz's and Marissa's production.
      let totalProduction = ruizProduction + marissaProduction;

      return totalProduction;
}
