# Task 1

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

`11`
### Sample Output 0

`D`

==========================================================

# Task 2

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

`adfgt`
### Sample Output 0

`A`
