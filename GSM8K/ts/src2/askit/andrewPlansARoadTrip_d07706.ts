// Recompilation count: 0
export function andrewPlansARoadTrip_d07706({ x1 }: {
    x1: number;
}): number {
    // Andrew plans a road trip from New Jersey to Rochester. It takes 'x1' days to travel by bus and half as many days to travel by car from New Jersey to Rochester. How many days will he travel if he plans to go to Rochester by bus and return from Rochester by car?
    let bus_days = x1;
    let car_days = x1 / 2;
    
    return bus_days + car_days;
}
