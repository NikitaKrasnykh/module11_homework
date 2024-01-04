let int = 10;

function checkPrimeNumber(number) {
    let message;
    if(number <= 1) {
        message = "Ошибка"
        return message;
    } else if(number > 1000) {
        message = "Неверные данные"
        return message;
    } else {
        message = "";
    }
    
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
        message = "Не простое число"
        return message;
        } else {
        message = "Простое число!"
        return message
        }
    }
}

console.log(checkPrimeNumber(int));