// Дано число. Выведите в консоль количество четных цифр в этом числе.

function task3(num) {
    string_num = String(num);
    let counter = 0;
    for (i = 1; i <= string_num.length - 1; i++) {
        num = Number(string_num[i]);
        if (num % 2 === 0) {
            counter++;
        }
    }
    console.log(counter);

}

task3(1234567890);
