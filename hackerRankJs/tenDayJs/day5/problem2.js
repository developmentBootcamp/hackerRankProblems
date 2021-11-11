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
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

//=====================================================================

// here is the solution

function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];
    const answers = [];
    let s1 = (P+Math.sqrt(Math.pow(P, 2)-16*A))/4;
    let s2 = (P-Math.sqrt(Math.pow(P, 2)-16*A))/4;

    answers.push(s1);
    answers.push(s2);

    return answers.sort();
}

// this is the most tricky one i have done so far, only because the problem statement is weird

//=======================================================================

// Down below is the code provided by HackerRank

function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());

    [s1, s2] = [s1, s2].sort();

    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}