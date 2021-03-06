# Problem 1 Statement

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

* int nums[n]: an array of integers
## Returns

* int: the second largest number in `nums`

## Input Format

The first line contains an integer, `n`, the size of the `nums` array. 

The second line contains `n` space-separated numbers that describe the elements in `nums`.

## Constraints
* `1 <= n <= 10`
* `1 <= nums <= 10`, where `nums` is the number at index `i`.
* The numbers in `nums` may not be distinct.

### Sample Input 0
```
5
2 3 6 6 5
```
### Sample Output 0
```
5
```

============================================================================================

# Problem 2 Statement

Complete the reverseString function; it has one parameter, `s`. You must perform the following actions:

1. Try to reverse string `s` using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's `message` on a new line.
3. Print `s` on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
### Input Format

Locked stub code in the editor reads variable `s` from stdin and passes it to the function.

### Output Format

You must write two print statements using console.log():

1. Print the contents of a caught exception's `message` on a new line. If no exception was thrown, this line should not be printed.
2. Print `s` on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

### Sample Input 0
```
"1234"
```
### Sample Output 0
```
4321
```

### Sample Input 1
```
Number(1234)
```
### Sample Output 1
```
s.split is not a function
1234
```

============================================================================================

# Problem 3 Statement

Complete the isPositive function below. It has one integer parameter, `a`. If the value of `a` is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

* If `a` is `0`, throw an Error with `message = Zero Error`.
* If `a` is negative, throw an Error with  `message = Negative Error`.

### Input Format

Locked stub code in the editor reads the following input from stdin and passes each value of `a` to the function as an argument:
* The first line is an integer, `n`, denoting the number of times the function will be called with some `a`.
* Each line `i` of the `n` subsequent lines contains an integer denoting some `a`.
### Output Format

If the value of `a` is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:

* If `a` is `0`, throw an Error with `message = Zero Error`.
* If `a` is negative, throw an Error with  `message = Negative Error`.

### Sample Input 0
```
3
1
2
3
```
### Sample Output 0
```
YES
YES
YES
```
### Sample Input 1
```
3
2
0
6
```
### Sample Output 1
```
YES
Zero Error
YES
```
### Sample Input 2
```
2
-1
20
```
### Sample Output 2
```
Negative Error
YES
```