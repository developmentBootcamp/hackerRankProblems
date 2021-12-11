# Problem Statement
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

* The first kangaroo starts at location `x1` and moves at a rate of `v1` meters per jump.
* The second kangaroo starts at location `x2` and moves at a rate of `v2` meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

### Example
x1 = 2  
v1 = 1  
x2 = 1  
v2 = 2

After one jump, they are both at __x = 3, (x1 +v1 = 2 + 1, x2 + v2 = 1 + 2)__, so the answer is YES.

### Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

* int x1, int v1: starting position and jump distance for kangaroo 1
* int x2, int v2: starting position and jump distance for kangaroo 2
### Returns

* string: either YES or NO
### Input Format

A single line of four space-separated integers denoting the respective values of __x1, v1, x2, and v2__.
### Sample Input 0
```
0 3 4 2
```
### Sample Output 0
```
YES
```
### Explanation 0

The two kangaroos jump through the following sequence of locations:
![](https://s3.amazonaws.com/hr-assets/0/1516005283-e74e76ff0c-kangaroo.png)

From the image, it is clear that the kangaroos meet at the same location (number __12__ on the number line) after same number of jumps (__4__ jumps), and we print YES.

### Sample Input 1
```
0 2 5 3
```
### Sample Output 1
```
NO
```
### Explanation 1

The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., __x2 > x1__). Because the second kangaroo moves at a faster rate (meaning __v2 > v1__) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.