// Recompilation count: 0
export function anIceCreamFactoryMakes_f8f7c4({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // An ice cream factory makes 'x1' quarts of chocolate ice cream in 'x2' hours.  
        // It can make 'x3' quarts of vanilla ice cream in 'x4' hours.  
        // How many quarts in total would be made in 'x5' hours?
        let chocolateIceCreamPerHour = x1 / x2;
        let vanillaIceCreamPerHour = x3 / x4;

        let totalIceCreamInX5Hours = (chocolateIceCreamPerHour + vanillaIceCreamPerHour) * x5;

        return totalIceCreamInX5Hours;
    }
