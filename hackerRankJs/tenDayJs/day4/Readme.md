# Problem 1 Statement
Complete the function in the editor. It has two parameters:  `a` and `b`. It must return an object modeling a rectangle that has the following properties:

* `length` This value is equal to `a`.
* `width` This value is equal to `b`.
* `perimeter` This value is equal to `2 * (a + b)`.
* `area` This value is equal to `a * b`.

___Note___: The names of the object's properties must be spelled correctly to pass this challenge.

### Input Format

The first line contains an integer denoting `a`.

The second line contains an integer denoting `b`.

### Output Format

Return a object that has the properties specified above. Locked code in the editor prints the returned object's `length`, `width`, `petimeter`, and `area` to STDOUT.

### Sample Input 0
```
4
5
```
### Sample Output 0
```
4
5
18
20
```

================================================================

# Problem 2 Statement

Complete the function in the editor. It has one parameter: an array, `a`, of objects. Each object in the array has two integer properties denoted by `x` and `y`. The function must return a count of all such objects `o` in array `a` that satisfy `o.x == o.y`.

### Input Format

* The first line contains an integer denoting `n`.
* Each of the `n` subsequent lines contains two space-separated integers describing the values of `x` and `y`.
### Output Format

Return a count of the total number of objects `o` such that `o.x == o.y`. Locked stub code in the editor prints the returned value to STDOUT.

### Sample Input 0
```
5
1 1
2 3
3 3
3 4
4 5
```
### Sample Output 0
```
2
```