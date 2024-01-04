const getNumberPower = (a, b) => {
    let result = 1;
    let message = "Введены неверные числа! Принимаются только натуральные числа! ";
    if (b <= 0) {
        return message;
    } else {
        for (let i = 0; i <= b; i++) {
            result *= a;
        }
        return result;
    }
}

console.log(getNumberPower(4, 4))