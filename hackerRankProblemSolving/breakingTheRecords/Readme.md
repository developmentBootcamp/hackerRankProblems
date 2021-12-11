# Problem Statement
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

### Example
* scores= [12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

### Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

* int scores[n]: points scored per game
### Returns

* int[2]: An array with the numbers of times she broke her records. Index __0__ is for breaking most points records, and index __1__ is for breaking least points records.
### Input Format

* The first line contains an integer __n__, the number of games.
* The second line contains  space-separated integers describing the respective values of __score[0], score[1], ..., score[n-1]__.

### Sample Input 0
```
9
10 5 20 20 4 5 2 25 1
```
### Sample Output 0
```
2 4
```
### Explanation 0

The diagram below depicts the number of times Maria broke her best and worst records throughout the season:


![](1487360234-6bca5c518d-breakingbest3.png)


She broke her best record twice (after games __2__ and __7__) and her worst record four times (after games __1__, __4__, __6__, and __9__), so we print __2__ __4__ as our answer. Note that she did not break her record for best score during game __3__, as her score during that game was not strictly greater than her best record at the time.

### Sample Input 1
```
10
3 4 21 36 10 28 35 5 24 42
```
### Sample Output 1
```
4 0
```
### Explanation 1

The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

![](1487360375-aee4388234-breakingbest5.png)

She broke her best record four times (after games __1__, __2__, __3__, and __9__) and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we print __4__ __0__ as our answer.