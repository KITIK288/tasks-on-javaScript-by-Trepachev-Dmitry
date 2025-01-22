// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task4(min, max) {
    let newArray = [];
    while (min !== max) {
        newArray.push(getRandomInt(min, max));
        min++;
    }
    return newArray;
}

console.log(task4(1, 10));
