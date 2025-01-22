// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины,
//
// заданной первым параметром.

function task4(string, num) {
    let newString = "";
    for (let i = num; i !== string.length; i++) {
        if (i > string.length) {
            console.log("Число для обрезавния строки больше длинны самой строки")
            break;
        }
        newString += string[i];
    }
    console.log(newString);
}

task4("котик", "4");
