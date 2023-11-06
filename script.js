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
    const user = arrayOfUsers.find(function (userObject) {
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

function getNegativeNumbers(arrayOfNumbers) {
    return arrayOfNumbers.filter(function (number) {
    return number < 0;
    });
}

console.log(getNegativeNumbers([1, -5, -3, 12, -152])); // [-5, -3, -152]

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
    const presentSheep = arrayOfSheep.filter(function (present) {
        return present === true
    })
    return presentSheep.length;
}

console.log(getNumberOfSheep(sheepArray));

// Exercise 9 - Write a function findNeedle() that takes an array full of junk but containing one "needle"

const arrayOfJunk = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle(junkArray) {
    const position = junkArray.findIndex(function (searchItem) {
        return searchItem === 'needle';
    });
    return `Found the needle at position ${position}.`
}

console.log(findNeedle(arrayOfJunk));

// Exercise 10 - Given an array of integers, return a new array with each value doubled. Using .map

function getDoubledNumbersArray(numbersToDouble) {
    return numbersToDouble.map(function (numberToDouble) {
        return numberToDouble * 2;
    })
}

console.log(getDoubledNumbersArray([1, 2, 3]))

//Exercise 11 - Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(numbersToInvert) {
    return numbersToInvert.map(function (numberToInvert) {
        return numberToInvert * -1;
    })
}

console.log(invert([1,2,3,4,5]));

// Exercise 12 - Calculate an average of school subject grades, rounded down to the nearest integer using .forEach function

function calculateAverageGrade(gradesArray) {
    let sumOfGrades = 0;
    const numberOfGrades = gradesArray.length;
    gradesArray.forEach(function (grade) {
        return sumOfGrades += grade;
    });
    return Math.floor(sumOfGrades / numberOfGrades);
}
console.log(calculateAverageGrade([3, 5, 7.7, 5.5]));

// Exercise 13 - Write isStringInArray function using .find function

function isStringInArray(arrayOfStrings, stringToConfirmPresence) {
    const stringInArray = arrayOfStrings.find(function (element) {
        return element === stringToConfirmPresence;
    });
    return stringInArray === stringToConfirmPresence;
}

console.log(isStringInArray(['Orange', 'Apple'], 'Apple')); // true
console.log(isStringInArray(['Onion', 'Cabbage'], 'Potato')); // false

// Exercise 14 - write the .forEach function from scratch using a for loop.

const vegetables = ['Carrot', 'Cabbage', 'Onion'];
/*
let i = 0;
i < 3;
console.log(0);
i = i + 1;
i < 3;
console.log(1);
i = i + 1;
i < 3;
console.log(2);
i = i + 1;
i < 3;

 */
for (let i = 0; i < 3; i = i + 1) {
    console.log(i);
}
/*
1. .forEach służy do wywoływania callback'a tyle razy ile znajduje się elementów w tablicy
2. Do każdego wywoływania callback'a jest przekazany kolejny element tablicy.
3. Drugim argumentem jest index.
 */
function forEach(array, callback) {
    for (let i = 0; i < array.length; ++i) {
        const element = array[i];
        callback(element, i);
    }
}
function printVegetable(vegetable, index) {
    console.log(vegetable, index);
}
forEach(vegetables, printVegetable);
// Carrot 0
// Cabbage 1
// Onion 2
const fruits = ['Apple', 'Orange', 'Watermelon'];
forEach(
    fruits,
    function(fruit, index) {
        console.log(fruit, index);
    }
)
// Apple 0
// Orange 1
// Watermelon 2

// Exercise 15 - Create the executeAfterFiveSeconds function
// that calls the provided function after five seconds

const arrayToIterate = ['apple', 'cherry', 'lemon', 'banana']

function iterateOverAnArray() {
    return arrayToIterate.forEach(function (element) {
        return console.log(element);
    });
}
function executeAfterFiveSeconds(functionToCall, time){
    return setTimeout(functionToCall, time);
}
executeAfterFiveSeconds(iterateOverAnArray, (5*1000))

// Exercise 16 - create the getRandomIntegerGenerator function. It should return a function that returns
// a random integer between two provided numbers.

function getRandomIntegerGenerator(firstNumber, secondNumber) {
    return function randomIntegerGenerator(newFirstNumber, newSecondNumber) {
        const numberOne = newFirstNumber ?? firstNumber;
        const numberTwo =  newSecondNumber ?? secondNumber;
        return Math.ceil(Math.random()*(numberOne-numberTwo)+numberTwo);
    }
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
console.log(getRandomDigit()); // random number between 0 and 9
console.log(getRandomIntegerGenerator(-10, 10)()); // random number between -10 and 10

// Exercise 17 - Create the findObjectProperty function that returns the name of the property from an object.
// it works similarly to .find built into Javascript but works with an object instead of an array
// if there is no matching property name return:


function findObjectProperty(object, recallFunction) {
    const objectParameters = Object.values(object);
    const objectKeys = Object.keys(object);
    for (let i = 0; i < objectParameters.length; ++i) {
        if (recallFunction(objectParameters[i])) {
            return objectKeys[i];
        }
    }
}
const redApple = {
    color: 'red',
    weightInGrams: 150
}

const propertyName = findObjectProperty(redApple, function(propertyValue) {
    return propertyValue === 'red';
})
console.log(propertyName); // color

const john = {
    name: 'John',
    bestFriend: {
        name: 'Adam'
    }
}

const adamPropertyName = findObjectProperty(john, function(propertyValue) {
    return propertyValue && propertyValue.name === 'Adam';
})
console.log(adamPropertyName); // bestFriend

// Exercise 18 - Create the getRandomCharacterGenerator function.
// It should return a function that returns a random character from the provided string.

function getRandomCharacterGenerator(providedString) {
    return function getRandomCharacterFromTheProvidedString(newStringForRandomCharacter) {
        const newString = newStringForRandomCharacter ?? providedString;
        const stringLength = newString.length;
        const randomCharacterIndex = Math.ceil(Math.random()*(0 - stringLength) + stringLength);
        const stringToArray = newString.split('')
        return stringToArray[randomCharacterIndex];
    };
}

const getRandomDigitTwo = getRandomCharacterGenerator('0123456789');
console.log(getRandomDigitTwo()); // returns a random string that contains a single digit

const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC()); // returns a random string that is a, A, b, B, c, or C

// Exercise 19 - Crete the getPrefixedStringGenerator function. It should return a function which returns a string
// with the prefix added

function getPrefixedStringGenerator(prefix) {
    return function getStringPrefixed (name) {
        return prefix + name ;
    }
}
const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
console.log(prefixStringWithMister(' John')); // Mr. John
console.log(prefixStringWithMister(' Adam')); // Mr. Adam
const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
console.log(prefixStringWithMiss(' Julie')); // Ms. Julie
const prefixStringWithNegative = getPrefixedStringGenerator('un');
console.log(prefixStringWithNegative('happy')); // unhappy
console.log(prefixStringWithNegative('productive')); // unproductive
console.log(prefixStringWithNegative('fair')); // unfair