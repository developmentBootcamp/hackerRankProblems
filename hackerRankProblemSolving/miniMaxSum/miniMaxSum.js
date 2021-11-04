function miniMaxSum(arr) {
    let arrSorted = arr.sort((a, b)=>a - b);
    let max = 0;
    let min = 0;
    for(let i = 0, j = arrSorted.length - 1; i < arrSorted.length - 1; i++, j--){
        max = max + arrSorted[j];
        min = min + arrSorted[i];
    }
    console.log(min + " " + max)
}