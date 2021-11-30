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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Above is the code from HackerRank
//===============================================================================

// Here is the solution.

function migratoryBirds(arr) {
    let sorted = arr.sort();
    let result = sorted[0];
    let maxOccur = 1;
    let counter = 0;
    for (let i = 0; i < sorted.length; i++) {
        counter = (sorted[i] === sorted[i-1]) ? counter + 1 : 0;
        if (counter > maxOccur) {
            result = sorted[i];
            maxOccur = counter;
        }
    }
    return result;
}

// This solution passed all the test cases.

//===============================================================================
// Below is the code from HackerRank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}