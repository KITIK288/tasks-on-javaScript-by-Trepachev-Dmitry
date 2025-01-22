// Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.

function task4(year) {
    year = year % 4;
    if (year === 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(task4(1488));
