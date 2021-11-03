function plusMinus(arr) {
    let length = arr.length;
    let minus = 0;
    let ratioMinus = 0;
    let plus = 0;
    let ratioPlus = 0;
    let zero = 0;
    let ratioZero = 0;
    for (var i = 0; i < length; i++) {
        if (arr[i] < 0) {
            minus++
            ratioMinus = minus / length;
        } else if(arr[i] > 0){
            plus++;
            ratioPlus = plus / length;
        } else if(arr[i] == 0){
            zero++;
            ratioZero = zero / length;
        }
    }
    console.log(ratioPlus.toFixed(6));
    console.log(ratioMinus.toFixed(6));
    console.log(ratioZero.toFixed(6));
}

// I used the above method to solve the problem but it can also be solved with forEach method, but i am not sure which one is more efficient.

function plusMinus(arr) {
    let length = arr.length;
    let minus = 0;
    let ratioMinus = 0;
    let plus = 0;
    let ratioPlus = 0;
    let zero = 0;
    let ratioZero = 0;
    arr.forEach(e => {
        if (e > 0){
            plus++;
            ratioPlus = plus / length;
        }
        else if (e < 0){
            minus++
            ratioMinus = minus / length;
        }
        else if (e == 0){
            zero++;
            ratioZero = zero / length;
        }
    });
    console.log(ratioPlus.toFixed(6));
    console.log(ratioMinus.toFixed(6));
    console.log(ratioZero.toFixed(6));
}

