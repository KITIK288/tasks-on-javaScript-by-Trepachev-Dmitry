// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое
//
// число на массив его делителей.

function task4(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let num = 0;
        for (let x = 0; x < array[i]; x++) {
            if (array[i] % num === 0) {
                newArray.push(num);
            }
            num++;
        }
    }
    console.log(newArray);
}

task4([12, 24, 36, 1488]);
