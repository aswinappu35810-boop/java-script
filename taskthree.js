let arr = [-5, -2, -9, -3, 4];

let largest;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        if (!found || arr[i] > largest) {
            largest = arr[i];
            found = true;
        }
    }
}

if (found) {
    console.log(largest);
} else {
    console.log("No odd number");
}
