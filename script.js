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

// Exercise 3 - write findUserWithFullName using the .find function

const usersArray = [
    {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184
    },
    {
        firstName: 'Kate',
        lastName: 'Williams',
        heightInCm: 169
    }
]

function findUserWithFullName(arrayOfUsers, userFullName) {
    user = arrayOfUsers.find(function (userObject) {
        const firstName = userObject.firstName;
        const lastName = userObject.lastName;
        const desiredFullName = firstName + ' ' + lastName;
        return userFullName === desiredFullName;
    });
    return user;
}
const kate = findUserWithFullName(usersArray, 'Kate Williams');
console.log(kate.heightInCm); // 169

// Exercise 4 - write the getNegativeNumbers function using the filter function

function getNegativeFunction(arrayOfNumbers) {
    return arrayOfNumbers.filter(function (number) {
        if (number < 0) {
            return number;
        }
    });
}

console.log(getNegativeFunction([1, -5, -3, 12, -152])); // [-5, -3, -152]

// Exercise 5 - write the getDivideByFunction

function getDivideByFunction(numberToDivideBy) {
    return function getNumber(numberToDivide) {
        return numberToDivide / numberToDivideBy;
    }
}

const divideByFive = getDivideByFunction(5);
console.log(divideByFive(10)); // 2
console.log(divideByFive(50)); // 10
const divideByTwo = getDivideByFunction(2);
console.log(divideByTwo(8)); // 4
console.log(divideByTwo(50)); // 25

// Exercise 6 - write the getDeltaFunction

// delta = b*b - 4*a*c

function getDeltaFunction(defaultDeltaNumbersObject) {
    return function deltaFunction(newDeltaNumbersObject) {
        const a = newDeltaNumbersObject?.a ?? defaultDeltaNumbersObject.a;
        const b = newDeltaNumbersObject?.b ?? defaultDeltaNumbersObject.b;
        const c = newDeltaNumbersObject?.c ?? defaultDeltaNumbersObject.c;
        return b * b - 4 * a * c;
    }
}

const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48
// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

// Exercise 7 - You get an array of numbers, return the sum of all of the positives ones.

function getSumOfPositiveNumbers(numbersArray) {
    let sumOfPositiveNumbers = 0;
    numbersArray.forEach(function (number) {
        if (number > 0) {
             return sumOfPositiveNumbers += number;
        }
    })
    return sumOfPositiveNumbers;
}

console.log(getSumOfPositiveNumbers([1,-4,7,12]));

// Exercise 8 - We need a function that counts the number of sheep present in the array (true means present). Using .filter


const sheepArray =[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

function getNumberOfSheep(arrayOfSheep) {
    let presentSheep = [];
    arrayOfSheep.filter(function (present) {
        if(present === true) {
            return presentSheep.push(present);
        }
    })
    return presentSheep.length;
}

console.log(getNumberOfSheep(sheepArray));