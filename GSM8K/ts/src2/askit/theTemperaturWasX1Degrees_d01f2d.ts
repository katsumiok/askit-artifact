// Recompilation count: 0
export function theTemperaturWasX1Degrees_d01f2d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // The temperature was 'x1' degrees Celsius. It dropped 'x2' degrees Celsius overnight and then increased 'x3' degrees Celsius in the morning. What was the temperature, in degrees Celsius, in the morning?
        return x1 - x2 + x3;
    }
