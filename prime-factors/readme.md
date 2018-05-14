# Prime Factors
Write a function that takes a whole number greater than 0 and returns an array of its prime factors.
```
primeFactors(1) ==> []
primeFactors(2) ==> [2]
primeFactors(9) ==> [3, 3]
primeFactors(10) ==> [2, 5]
```

## Movements
Follow the movements in [this presentation][ppt] by Bob Martin.

#### 1. Create unit test suite.
#### 2. The first test: n = 1.
#### 3. The second test: n = 2.
  * refactor tests after tests pass
#### 4. The third test: n = 3.
#### 5. The fourth test: n = 4.
  * `if (n % 2 === 0)`
#### 6. The fifth test: n = 6.
  * Passes. No changes.
#### 7. The sixth test: n = 8.
  * change `if (n % 2 === 0)` to `while (remainder % 2 === 0)`
#### 8. The seventh test: n = 9.
  * add outer while loop: `while (remainder > 1)`
  * factor out `if (remainder > 1)`
  * refactor `while` loops to `for` loops.

<!-- links -->
[ppt]: http://butunclebob.com/files/downloads/Prime%20Factors%20Kata.ppt