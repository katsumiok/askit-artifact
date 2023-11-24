// Recompilation count: 0
export function aPerfumeCompanyIsTrying_2efcf8({ x1, x2, x3, x4 }: { x1: number; x2: number; x3: number; x4: number; }): number {
        // A perfume company is trying to create new scents. They already have 'x1' vanilla scents and 'x2' fruity scents available and they need to decide which kind of scent to focus on. They decide to focus on whichever scent sells the most and monitor their number of sales as part of their research. By the end of the day, they sell 'x3' of each of the vanilla scents and 'x4' of each of the fruity scents available. How many more vanilla scents sold compared with the fruity scents?

        // total vanilla sales
        let vanillaSales = x1 * x3;
        
        // total fruity sales
        let fruitySales = x2 * x4;
        
        // the difference between vanilla sales and fruity sales
        return vanillaSales - fruitySales;
    }

