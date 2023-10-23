// Exercise 1 - write the getSmallestNumber function using the forEach function

function getSmallestNumber(numbersObject) {
    let smallestNumber = numbersObject[0];
    for (let i = 0; i < numbersObject.length; ++i) {
        if(numbersObject[i] <= smallestNumber) {
            smallestNumber = numbersObject[i];
        }
    }
    return smallestNumber;
}
console.log(getSmallestNumber([2, 10, -5, 1, 4]));
console.log(getSmallestNumber([200, 25, 4, 123, 87]));