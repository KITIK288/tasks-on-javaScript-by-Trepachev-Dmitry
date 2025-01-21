// Дан массив с числами:
//
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

function task2(array) {
    let string = "";
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
        string += String(array[i]);
    }
    reverse_string = string.split('').reverse().join('');
    console.log(reverse_string);
    new_array = [];
    for (i = 0; i < reverse_string.length; i++) {
        new_array.push(reverse_string[i]);
    }
    console.log(new_array);
}

task2([1, 2, 3, 4, 5]);
