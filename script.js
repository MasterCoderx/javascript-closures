// Exercise 1

function getDivideByFunction(numberToDivideWith) {
    function divideBy(numberToDivide) {
        return numberToDivide / numberToDivideWith;
    }
    return divideBy;
}

const divideByFive = getDivideByFunction(5);
console.log(divideByFive(10)); // 2
console.log(divideByFive(50)); // 10
const divideByTwo = getDivideByFunction(2);
console.log(divideByTwo(8)); // 4
console.log(divideByTwo(50)); // 25