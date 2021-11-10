# Problem 1 Statement

Complete the getGrade(score) function in the editor. It has one parameter: an integer, `score`, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her `grade` according to the following rules:

* If `25 < score <= 30`, then `grade = A`.
* If `20 < score <= 25`, then `grade = B`.
* If `15 < score <= 20`, then `grade = C`.
* If `10 < score <= 15`, then `grade = D`.
* If `5 < score <= 10`, then `grade = E`.
* If `0 <= score <= 5`, then `grade = F`.

## Input Format

Stub code in the editor reads a single integer denoting `score` from stdin and passes it to the function.

## Constraints

* `0 <= score <= 30`

## Output Format

The function must return the value of `grade` (i.e., the letter grade) that Julia earned on the exam.

### Sample Input 0
```
11
```
### Sample Output 0
```
D
```
============================================================================================

# Problem 2 Statement

Complete the getLetter(s) function in the editor. It has one parameter: a string, `s`, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

* If the first character in string `s` is in the set `{a, e, i, o, u}`, then return A.
* If the first character in string `s` is in the set `{b, c, d, f, g}`, then return B.
* If the first character in string `s` is in the set `{h, j, k, l, m}`, then return C.
* If the first character in string `s` is in the set `{n,p, q, r, s, t, v, w, x, y, z}`, then return D.

## Function Description

Complete the getLetter function in the editor below.

getLetter has the following parameters:

* string s: a string
## Returns

* string: a single letter determined as described above
## Input Format

Stub code in the editor reads a single string denoting `s` from stdin.

## Constraints

* `1 <= |s| <= 100`, where `|s|` is the length of `s`.
* String `s` contains lowercase English alphabetic letters (i.e., a through z) only.
### Sample Input 0
```
adfgt
```
### Sample Output 0
```
A
```

============================================================================================

# Problem 3 Statement

1. First, print each vowel in `s` on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in `s`.
2. Second, print each consonant (i.e., non-vowel) in `s` on a new line in the same order as it appeared in `s`.
## Function Description

Complete the vowelsAndConsonants function in the editor below.

vowelsAndConsonants has the following parameters:

* string s: the string to process

## Prints

* Print each vowel of `s` in order on a new line, then print each consonant in order on a new line. Return nothing.

## Input Format

There is one line of input with the string `'`.

## Output Format

First, print each vowel in `s` on a new line (in the same order as they appeared in `s`). Second, print each consonant (i.e., non-vowel) in `s` on a new line (in the same order as they appeared in `s`).

### Sample Input 0
```
javascriptloops
```
### Sample Output 0
```
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
```