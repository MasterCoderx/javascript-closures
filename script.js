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
