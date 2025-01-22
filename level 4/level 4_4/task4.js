// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function task4(number) {
    for (let i = 2; i !== number; i++) {
        if (number % i === 0) {
            return 0;
        }
    }
    return 1;
}

console.log(task4(1488));
