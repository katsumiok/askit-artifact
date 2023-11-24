// Recompilation count: 0
export function joshRunsACarShop_5cc7f8({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
     // Note: As the week has 7 days and he is taking off 2 days (Sunday and Wednesday), then he works 5 days a week
     // Josh run the car shop and services 'x1' cars a day for 'x2' weeks. 
     // Assuming x2 weeks means full weeks and week starts from Monday, he works for 5*x2 days servicing x1 cars, earning $4 per car.
    return (x1 * 4) * (5 * x2);
}
