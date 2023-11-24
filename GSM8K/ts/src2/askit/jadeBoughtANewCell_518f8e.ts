// Recompilation count: 0
export function jadeBoughtANewCell_518f8e({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {

    // Jade bought a new cell phone with an incredible camera, so she spent all week taking pictures of her daily life. At the end of the week, she had taken 'x1' photos. She wants to upload all her photos on her Instagram. If she uploads 'x2' photos in one batch and she uploads 'x3' batches each day, how many days will she need to upload all of her photos?
    
    // First, we calculate the total photos that can be uploaded in a day.
    const photosPerDay = x2 * x3;

    // Then, we calculate how many days she will need to upload all of her photos by dividing the total photos by the photos that can be uploaded in a day. We use Math.ceil to round up to the nearest whole number because she can't upload photos for part of a day.
    const daysNeeded = Math.ceil(x1 / photosPerDay);

    // Return the number of days needed
    return daysNeeded;

}
