'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// Above is the code provided by HackerRank

//=================================================================================
// Sol with Regular Function

function modifyArray(nums) {
    let modifiedArray = nums.map(function(n){
        if(n % 2 == 0){
            return n * 2;
        } else{
            return n * 3;
        }
    });
    return modifiedArray;
}
// Sol with Arrow Function

function modifyArray(nums) {
    return nums.map((n) => (n % 2 === 0) ? n * 2 : n * 3);
}

//=================================================================================

// Down below is the code provided by HackerRank
function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);

    console.log(modifyArray(a).toString().split(',').join(' '));
}