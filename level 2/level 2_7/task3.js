// Дано некоторое число, например, такое:
//
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
//
// 28

function task3(num) {
    str_num = String(num);
    new_string = ""
    for (i = 0; i < str_num.length; i++) {
        console.log(str_num[i]);
        number = Number(str_num[i]);
        if (number % 2 === 0) {
            new_string += number;
        }
    }
    new_num = Number(new_string);
    console.log(new_num);
}

task3(123789);
