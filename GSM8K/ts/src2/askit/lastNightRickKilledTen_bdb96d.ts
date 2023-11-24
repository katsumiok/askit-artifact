// Recompilation count: 0
export function lastNightRickKilledTen_bdb96d({ x1 }: { x1: number }): number {
    // Last night Rick killed ten wolves and 'x1' cougars while hunting. 
    // Today Rick killed three times as many wolves as cougars and three fewer cougars than the previous night. 
    // How many animals did Rick kill?

    let lastNightWolves = 10;
    let lastNightCougars = x1;

    let todayCougars = lastNightCougars - 3;
    let todayWolves = todayCougars * 3;

    let totalAnimalsKilled = lastNightWolves + lastNightCougars + todayCougars + todayWolves;

    return totalAnimalsKilled;
}
