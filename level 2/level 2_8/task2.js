// Дана некоторая строка:
//
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
//
// '1 22 333 22 1'

function task2(string) {
    array = string.split(" ");
    new_string = "";
    for (i = 0; i < array.length; i++) {
        if (array[i].length <= 3) {
            new_string += array[i] + " ";
        }
    }
    console.log(new_string);
}

task2('1 22 333 4444 22 5555 1');
