// Task -1:
// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(heightsArry) {
    let lowheight = heightsArry[0];
    for (let i = 0; i < heightsArry.length; i++) {
        const element = heightsArry[i];
        if (lowheight > element) {
            lowheight = element
        }
    }
    console.log(lowheight);
}

lowestNumber(heights2);