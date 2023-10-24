// Exercise 1 - Write the getSmallestNumber function using .forEach function

function getSmallestNumber(numbersArray) {
    let smallestNumber = numbersArray[0];
    numbersArray.forEach(function(number) {
        if(number < smallestNumber) {
            smallestNumber = number;
        }
    });
    return smallestNumber;
}

console.log(getSmallestNumber([2, 10, -5, 1, 4]));
console.log(getSmallestNumber([200, 25, 4, 123, 87]));

// Exercise 2 - Write the getSquared function using .map

function getSquaredNumbers(arrayOfNumbers) {
    return arrayOfNumbers.map(function(number) {
        return Math.pow(number, 2);
    })
}

console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]

