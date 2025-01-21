// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

function task2(string) {
    counter = 0;
    new_string = "";
    for (i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            new_string += string[i].toUpperCase();
        } else {
            new_string += string[i];
        }
    }
    console.log(new_string);
}

task2("abcdefg");
