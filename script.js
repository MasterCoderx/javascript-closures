// Exercise 1 - write the getSmallestNumber function using the forEach function

function getSmallestNumber(numbersObject) {
    const smallestNumber = [];
    for (let i = 0; i < numbersObject.length; ++i) {
        if (numbersObject[i] < smallestNumber) {
            smallestNumber.push(numbersObject[i]);
        }
    }
    return smallestNumber[smallestNumber.length - 1]
}
console.log(getSmallestNumber([2, -5, 10, 1, 4]));
