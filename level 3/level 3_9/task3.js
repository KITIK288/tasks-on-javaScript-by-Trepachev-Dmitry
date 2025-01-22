// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

function check(num) {
    let stringNum = String(num);
    let counter = 0;
    for (let x = 0; x < stringNum.length; x++) {
       if (stringNum[x] === "0") {
           counter++;
       }
    }
    if (counter >= 2) {
        return 0;
    } else {
        return 1;
    }
}

function task1(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (check(array[i]) === 1) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}

task1([1000, 2324, 35345, 34234, 148800]);
