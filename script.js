// Exercise 1 - Write the getSmallestNumber function using .forEach function

function getSmallestNumber(numbersObject) {
    let smallestNumber = numbersObject[0];
    function numberCheckLoop(number) {
        if(number < smallestNumber) {
            smallestNumber = number;
        }
    }
    numbersObject.forEach(numberCheckLoop);
    return smallestNumber;
}

console.log(getSmallestNumber([2, 10, -5, 1, 4]));
console.log(getSmallestNumber([200, 25, 4, 123, 87]));