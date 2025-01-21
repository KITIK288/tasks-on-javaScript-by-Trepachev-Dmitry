// Дано число. Получите первую четную цифру с конца этого числа.

function task2(num) {
    string_num = String(num);
    string_num = string_num.split('').reverse().join('');
    for (i = 0; i < string_num.length; i++) {
        if (Number(string_num[i]) % 2 === 0) {
            console.log(Number(string_num[i]));
            break;
        }
    }
}

task2("123456789");
