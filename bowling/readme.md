# The Bowling Game Kata
This Kata is taken from [TheBowlingGameKata][bub-bowling] discussed on [butUncleBob.com][bub]. Master each phase carefully to develop "Design Sense". (There is a Power Point presentation available for [download][bub-ppt].)

## Requirements
Create a module named `Game` with two methods--`roll` and `score`. Roll accepts the number of pins knocked down as an integer. Score is called at the end of a game and returns the total score for the game.
```javascript
const game = new Game();
game.roll(8); // 8 pins
game.roll(2); // 2 pins (a spare)
game.roll(7); // 7 pins on bonus frame for spare
// .... more rolls to complete all 10 frames
game.score(); // returns 17;
```

## Phases
1. Consider the design and class composition to meet the requirements.
2. Begin. Create test file.
3. Create first test and code to pass test. (Gutter Game)
4. Create second test and code. (All ones)
5. Create third test and code. (one spare)
6. Create fourth test and code. (one strike)
7. Create fifth test and code. (perfect game)


<!-- links -->
[bub]: http://butunclebob.com/
[bub-bowling]: http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
[bub-ppt]; http://butunclebob.com/files/downloads/Bowling%20Game%20Kata.ppt