// Recompilation count: 0
export function oliviaUploadedX1PicturesTo_3fd749({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Olivia uploaded 'x1' pictures to Facebook.  She put the same number of the pics into 'x2' albums. 'x3' of the albums were selfies only and 'x4' of the albums were portraits.  How many portraits and selfies did she have?

    // calculate the number of pictures per album
    const picturesPerAlbum = x1 / x2;

    // calculate the total number of selfies and portraits
    const totalSelfiesAndPortraits = (picturesPerAlbum * x3) + (picturesPerAlbum * x4);

    // return the total number of selfies and portraits
    return totalSelfiesAndPortraits;

}
