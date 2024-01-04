function getSum(a) {
    return function (b) {
        return a + b;
    }
}

let functionResult = getSum(5);

console.log(functionResult(5));