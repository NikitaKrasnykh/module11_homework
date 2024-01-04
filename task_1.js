const arrayOfNumbers = [1, 0, NaN, 2, 15, 3, 44];


function getOddAndEvenNumbers(array) {
    let oddNumber = 0;
    let evenNumber = 0;
    let unknownItem = 0;
    let zeroNumber = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) !== "number" || isNaN(array[i])) {
            unknownItem++;
        } else if (array[i] === 0) {
            zeroNumber++
        } else if (array[i] % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }

    console.log(`Array has ${oddNumber} odd numbers, ${evenNumber} even numbers, ${zeroNumber} zeroes and ${unknownItem} unknown numbers (not numbers)`)
};

getOddAndEvenNumbers(arrayOfNumbers);