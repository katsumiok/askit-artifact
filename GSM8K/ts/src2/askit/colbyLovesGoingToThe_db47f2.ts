// Recompilation count: 0
export function colbyLovesGoingToThe_db47f2({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    const budget: number = 150;
    const friday_saturday_ticket_price: number = 10;
    const other_days_ticket_price: number = 7;
    const popcorn_price: number = 8;
    const candy_price: number = 2;

    const cost_friday_saturday: number = friday_saturday_ticket_price * x1;
    const cost_other_days: number = other_days_ticket_price * x2;
    const cost_popcorn: number = popcorn_price * x3;
    const cost_candy: number = candy_price * 4;

    const cost_total: number = cost_friday_saturday + cost_other_days + cost_popcorn + cost_candy;

    const remaining_budget = budget - cost_total;
    const cost_next_movie_include_popcorn_candy = friday_saturday_ticket_price + popcorn_price + candy_price;
    const movies_can_watch = remaining_budget / cost_next_movie_include_popcorn_candy;

    if (movies_can_watch < 1) {
        return 0;
    }

    return Math.floor(movies_can_watch);
}
