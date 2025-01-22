//  Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
// let arr = [1, 2, 3, 4, 5];
//
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

function task4(array, element) {
    if (element >= array.length) {
        return array[0]
    }
    return array[element];
}

console.log(task4([1, 2, 3, 4, 5], 3));
