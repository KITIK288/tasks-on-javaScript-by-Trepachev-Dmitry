// Дан массив. Удалите из него элементы с заданным значением.

function removeElements(array, valueToRemove) {
    return array.filter(element => element !== valueToRemove);
}

const originalArray = [1, 2, 3, 4, 2, 5];
const valueToRemove = 2;
const newArray = removeElements(originalArray, valueToRemove);

console.log(newArray);