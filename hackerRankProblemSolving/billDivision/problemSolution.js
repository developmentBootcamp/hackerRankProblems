'use strict';

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
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

// Above is the code from HackerRank
//===============================================================================

// Here is the solution.

function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    let billSum = bill.reduce((a, b) => a + b);
    let split = billSum / 2;
    let result;
    if( split < b ){
        result = b - split;
    } else if( split === b) {
        result = 'Bon Appetit'
    }
    console.log(result);
}

// This solution passed all the test cases.

//===============================================================================
// Below is the code from HackerRank

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}