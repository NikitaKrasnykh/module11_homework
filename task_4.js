function showNumbersInRange(min, max) {
    let currentNumber = min;

    const intervalId = setInterval(() => {
        console.log(currentNumber);
        if (currentNumber === max) {
            clearInterval(intervalId);
        }
        currentNumber++;
        }, 1000);
}