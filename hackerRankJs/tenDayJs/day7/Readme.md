# Problem 1 Statement

Complete the function in the editor below by returning a RegExp object, `re`, that matches any string `s` that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

### Constraints

* The length of string `s` is `>= 3` .
* String `s` consists of lowercase letters only (i.e., [a-z]).
### Output Format

The function must return a RegExp object that matches any string `s` beginning with and ending in the same vowel.

`s`Sample Input 0
```
bcd
```
### Sample Output 0
```
false
```
### Explanation 0

This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

### Sample Input 1
```
abcd
```
### Sample Output 1
```
false
```
### Explanation 1

This string ends in a consonant, so it cannot start and end with the same vowel.

### Sample Input 2
```
abcda
```
### Sample Output 2
```
true
```
### Explanation 2

This string starts and ends with the same vowel (a).

### Sample Input 3
```
abcdo
```
### Sample Output 3
```
false
```
### Explanation 3

This string starts with the vowel a but ends in the vowel o.

============================================================================================

# Problem 2 Statement
Complete the function in the editor below by returning a RegExp object, `re`, that matches any string `s` satisfying both of the following conditions:

* String `s` starts with the prefix Mr., Mrs., Ms., Dr., or Er.
* The remainder of string `s` (i.e., the rest of the string after the prefix) consists of one or more, upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
### Constraints

* The length of string `s` is `>= 3`.
Output Format

The function must return a RegExp object that matches any string `s` satisfying both of the given conditions.

The length of string  is  .
### Output Format

The function must return a RegExp object that matches any string  satisfying both of the given conditions.

### Sample Input 0
```
Mr.X
```
### Sample Output 0
```
true
```
### Explanation 0

This string starts with Mr., followed by an English alphabetic letter (X).

### Sample Input 1
```
Mrs.Y
```
### Sample Output 1
```
true
```
### Explanation 1

This string starts with Mrs., followed by an English alphabetic letter (Y).

### Sample Input 2
```
Dr#Joseph
```
### Sample Output 2
```
false
```
### Explanation 2

This string starts with Dr# instead of Dr., so it's invalid.

### Sample Input 3
```
Er .Abc
```
### Sample Output 3
```
false
```
### Explanation 3

This string starts with Er but there is a space before the period (.), making the string invalid.

============================================================================================

# Problem 3 Statement
Complete the function in the editor below by returning a RegExp object, `re`, that matches every integer in some string `s`.

### Constraints

* The length of string `s` is `>= 3`.
* It's guaranteed that string `s` contains at least one integer.
### Output Format

The function must return a RegExp object that matches every integer in some string `s`.
### Sample Input 0
```
102, 1948948 and 1.3 and 4.5
```
### Sample Output 0
```
102
1948948
1
3
4
5
```
### Explanation 0

When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '102', '1948948', '1', '3', '4', '5' ].

### Sample Input 1
```
1 2 3
```
### Sample Output 1
```
1
2
3
```
### Explanation 1

When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '1', '2', '3' ].