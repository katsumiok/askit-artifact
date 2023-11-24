// Recompilation count: 0
export function marissaBoughtABallAt_92e17e({}: {}): number {
        let cost_of_ball = 20;
        let initial_money = 80;
        let cost_of_candy = 5;

        // Calculate remaining money after buying ball
        let remaining_money = initial_money - cost_of_ball;

        // Calculate number of candy bars Marissa can buy for Jimmy with remaining money
        let num_of_candy_bars = Math.floor(remaining_money / cost_of_candy);
       
        return num_of_candy_bars;
}
