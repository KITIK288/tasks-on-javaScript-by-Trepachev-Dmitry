//  Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
//
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

function task2(array) {
    let new_array = [];
    for (i = 0; i < array.length; i++) {
        string_num = String(array[i]);
        string_num = string_num.split('').reverse().join('');
        console.log(string_num);
        num = Number(string_num);
        new_array.push(num);
    }
    console.log(new_array);
}

task2([123, 456, 789]);
