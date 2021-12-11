'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// Above is the code from HackerRank
//===============================================================================

// Here are two solutions.
// 1.
function getTotalX(a, b) {
    function gcd(x, y){
        if (y == 0){
            return x;
        }
        return gcd(y, x % y);
    }
    let o = a.length;
    function findLcmA(a, o){
        let lcmA = a[0];
        for(let i = 1; i < o; i++){
            lcmA = (((a[i] * lcmA)) /
                (gcd(a[i], lcmA)));
        }
        return lcmA;
    }
    let p = b.length;
    function findGcdB(b, p){
        let gcdB = b[0];
        for (let i = 1; i < p; i++){
            gcdB = gcd(b[i], gcdB);
            if(gcdB == 1){
                return 1;
            }
        }
        return gcdB;
    }
    let validCount = 0;
    for(let c = 1; c <= 100; c++){
        if(c % findLcmA(a, o) == 0){
            if(findGcdB(b, p) % c == 0){
                validCount++;
            }
        }
    }
    return validCount;
}

// 2. Later i found another solution which was shorter and, quite a good one.

function getTotalX(a, b) {
    let validCount = 0;
    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }
    return validCount;
}
// These solutions passed all the test cases.

//===============================================================================
// Below is the code from HackerRank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}