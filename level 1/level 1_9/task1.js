// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

function task1(array) {
    check = "";
    new_array = [];
    for (i = 0; i <= array.length - 1; i++) {
        string = array[i];
        check = (string[0] + string[1] + string[2] + string[3] + string[4] + string[5] + string[6]);
        if (check === "http://") {
            new_array.push(string);
        }
    }
    console.log(new_array);
}

task1(["http://kitik", "kitiks"]);
