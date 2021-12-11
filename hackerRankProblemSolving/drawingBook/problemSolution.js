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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

// Above is the code from HackerRank
//===============================================================================

// Here are two solutions.
// 1.
function pageCount(n, p) {
    let pageTurns = Math.trunc(p / 2);
    let totalTurns = Math.trunc(n / 2);
    let turnsFromBack = totalTurns - pageTurns;
    let ans;
    if(turnsFromBack > pageTurns){
        ans = pageTurns;
    } else {
        ans = turnsFromBack;
    }
    // return Math.trunc(ans);
    return ans;
}

// 2. Later I used another logic which was shorter and, quite a good one.

function pageCount(n, p) {
    let pageTurns = Math.trunc(p / 2);
    let totalTurns = Math.trunc(n / 2);
    let turnsFromBack = totalTurns - pageTurns;
    let ans = Math.min(turnsFromBack, pageTurns);
    return ans;
}

// These solutions passed all the test cases.

//===============================================================================
// Below is the code from HackerRank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}