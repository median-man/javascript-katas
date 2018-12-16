[33mcommit 80c10e3d05089d65c22b65776939af41c93cb0bf[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 15 05:13:50 2018 -0800

    Bowling game passes test 2 (needs refactor)
    
    Today I performed the kata from the beginning of test 3 in about 17
    minutes. After this time, I reset the kata and made it as far as passing
    test 2 before refactoring.
    
    Tomorrow, I will reset the kata and attempt to perform it in its
    entirety in 25 minutes.

[33mcommit 0f66c85baf3cfcbf4e60d59746a0659328e572d6[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 15 05:06:01 2018 -0800

    Reset bowling kata

[33mcommit 9614fd63e66a568af723074c4e773b1a079db561[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 15 05:05:40 2018 -0800

    Complete bowling kata

[33mcommit d0ecb893a9d89132992fb4a1f53a826950d73b1d[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 15 04:57:06 2018 -0800

    Bowling game passes test 3--spare

[33mcommit d425e8d941c0824a8e9497019f4dedd1acd3d08b[m[33m ([m[1;31morigin/master[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 14 05:05:10 2018 -0800

    Bowling kata passing test 2 (spare)
    
    Today I focused on studying the fourth test. After going through it twice,
    I completed the fifth test which passed immediately. Then, I reset
    the kata and started from the beginning progressing as quickly as
    possible with the remaining time.
    
    I was able to complete the second test, refactor, and write a pending
    test for the "one spare" case.
    
    Tommorrow I will start from this point and repeat the kata until my
    25 minute time block for kata practice concludes.

[33mcommit d24f588c41c877564029f49e0b379879f3bafcfc[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 14 04:56:03 2018 -0800

    Reset bowling game

[33mcommit e907632068928b73b36d2a7f506b464fdc676ec6[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 14 04:55:43 2018 -0800

    Bowling game passing all 5 tests

[33mcommit 902534addc302293d795f6dbde2b8ab7492639fd[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 14 04:54:28 2018 -0800

    Bowling game passes test 4 (strike)

[33mcommit 89f76b85b3e2714394939f9ce8fc1d98c5a9a777[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 14 04:49:56 2018 -0800

    Revert "Bowling game passes test 4 (strike)"
    
    This reverts commit 5110406895747c77407fb7b5bea0b1418acfab5f.

[33mcommit 5110406895747c77407fb7b5bea0b1418acfab5f[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 14 04:49:49 2018 -0800

    Bowling game passes test 4 (strike)

[33mcommit efc9a58a9620cfc4268661e347ec42af3ec2d000[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 14 04:39:23 2018 -0800

    Revert "Bowling game passes strike test. Needs refactor."
    
    This reverts commit 9c55c35044bfa1e9b3398d5175da3b0b2f62a6e4.
    
    Revert bowling game to beginning of test/phase 4.

[33mcommit 9c55c35044bfa1e9b3398d5175da3b0b2f62a6e4[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Thu Dec 13 04:39:54 2018 -0800

    Bowling game passes strike test. Needs refactor.
    
    Adds test for strike. BowlingGame is modified by needs additional
    refactoring. strikeBonus function should be factored from score method.
    
    I performed the first three tests/phases of the bowling game kata
    perfectly from memory for today's practice. Then, I used the last 8 or
    so minutes to begin studying the fourth test/phase. I nearly completed
    it in the time given.
    
    Tomorrow, I will revert this last commit to reset the game to the
    start of test/phase 4 and focus on the fourth segment of this kata.

[33mcommit 17563d8b963ff697058237e4b3fd250bab370bd2[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Thu Dec 13 04:32:37 2018 -0800

    Bowling game passes third test
    
    Bowling game passes test for scoring one spare. Adds test and modifies
    BowlingGame.

[33mcommit 5006a46aadf0f9dd164b08df9c224d05113d8892[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Thu Dec 13 04:20:39 2018 -0800

    Bowling game passes first two tests
    
    Adds createBowlingGame which is a factory function that returns a
    BowlingGame object.
    
    A BowlingGame has a roll method and score method. Bowling game passes
    tests for a gutter game and a game when all ones are rolled.

[33mcommit 459df9cd944bf9d837741de559eeca9eab13dcef[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Thu Dec 13 04:06:19 2018 -0800

    Reset bowling game
    
    Deletes all tests and code for Bowling Game Kata

[33mcommit 55e703ca79ff817a8e64c0905141960882d63196[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Wed Dec 12 05:31:11 2018 -0800

    Bowling game passes thrid test
    
    - Adds test for score one spare
    - Refactors game.rolls and game.score
    - Modifies BowlingGame to pass test
    
    I was able to practice the third test twice today and I believe I have
    a firm understanding of the key concepts of this phase.
    
    There are three concepts practiced in this phase. One being the practice
    of skipping a failing test while refactoring code in preparation to pass the
    failing test. Observing this practice allows one to incrementally modify
    the code and quickly verify that a change is not a regression. Another,
    good practice is refactoring in the smallest possible increments that
    are able to pass all tests. Finally, carefully regard setting flags as
    a potential smell of poor design.
    
    Tommorrow, I will perform the kata from the beginning before proceeding
    to work on mastering the fourth test phase.

[33mcommit 3837d8e63af8ea1adedf7815645b23aee0731ce2[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Wed Dec 12 05:24:14 2018 -0800

    Revert "Bowling kata third test passing"
    
    This reverts commit ff707cfc03eb2c2693520e77c87fd7d6e1e08e63.
    
    Reset third test to practice the phase again.

[33mcommit ff707cfc03eb2c2693520e77c87fd7d6e1e08e63[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Wed Dec 12 05:23:06 2018 -0800

    Bowling kata third test passing
    
    - Adds third test for one spare.
    - Modifies BowlingGame to pass test.

[33mcommit 28ac6e0c566cb0b27489daf7b2e044de6f0c567b[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Wed Dec 12 05:02:04 2018 -0800

    Revert "wip: Add test for one spare and refactor"
    
    This reverts commit ee1d88f71ef42365e8101b9c348672c2fe697501.
    
    Revert wip on scoring spare to practice the phase from its start.

[33mcommit ee1d88f71ef42365e8101b9c348672c2fe697501[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Dec 11 05:13:50 2018 -0800

    wip: Add test for one spare and refactor
    
    Adds pending test for one spare rolled. Adds wip refactoring bowling
    game so that game.score calculates score and rolls adds pins knocked
    to array of rolls.
    
    This concludes my 30 minute kata practice. I was able to perform the
    first two tests in the exact process taught in the slides. Then, I
    completed the thrid test following the slides carefuly while studying
    the steps and reasons behind the steps. After completing the third test
    and committing, I reverted the commit to practice the third test again.
    I was able to make it to slide 34--part way through the process of
    refactoring with the third test in a pending state.
    
    Tomorrow, I will revert this commit to start at the beginning of the
    third test to get more practice at this section of the kata.

[33mcommit e413f82e87c0d070c397b959db3fddd1b1b154a2[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Dec 11 05:10:18 2018 -0800

    Revert "Bowling game passes one spare test"
    
    This reverts commit 81bd7c53eeaeb7ed4e710967e34ff441d6d0b27e.
    
    Redo third test of bowling game kata.

[33mcommit 81bd7c53eeaeb7ed4e710967e34ff441d6d0b27e[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Dec 11 05:07:57 2018 -0800

    Bowling game passes one spare test
    
    Adds test for one spare rolled. Modifies bowling game to score
    one spare.

[33mcommit 241d02a13654c919c87f1a5522195ade37017c2c[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Dec 11 04:49:56 2018 -0800

    Bowling game passes tests for gutter and all ones
    
    Adds roll and score methods to BowlingGame returned by createBowlingGame.
    Passes test for all 0's rolled and all 1's rolled.

[33mcommit 75c5be4a1cfd11808b9719f57132b9d8e6ae0790[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Dec 11 04:39:04 2018 -0800

    Reset bowling game

[33mcommit 268de5c7652694bb5242e6cec86b951492ddb40b[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Mon Dec 10 06:11:19 2018 -0800

    Bowling game passes all ones test
    
    This morning, reviewed the blog post by Uncle Bob, the person who
    popularized this kata. In the blog, he suggests that the kata be
    approached as a kata is in martial arts. That is, learn the phases of
    the kata by mastering the phase before tackling the next. He also
    suggests focusing on one kata by practicing it for about two weeks each
    day for about 30 minutes before moving on to antother kata.
    
    I intend to do just as Martin suggests. To that end, I focused solely on
    the first and second tests of the kata. I repeated the first kata until
    I was able to perform the TDD steps quickly from memory. Then, I repeated
    the second once before time was up. This process has lead me to discover
    a potential best practice. I will experiment with disciplining myself to
    create a commit each time I'm done refactoring after passing a test.
    
    Tommorow, I should start from the beginning and proceed through each
    phase until I have to rely upon the slides created by Martin. Then,
    practice that phase until I can do it without referencing the slides.

[33mcommit d28fd3fde356b869fabd5d891ee7d6a1361421cd[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Mon Dec 10 06:07:11 2018 -0800

    Bowling game passes gutter game test

[33mcommit 05af00b166e7ca5480b320f73a65a47a8fab090c[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Mon Dec 10 05:41:01 2018 -0800

    Reset bowling game

[33mcommit cb698335eccec33ee953ac5d6b3abbf0c72663ab[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Dec 9 05:30:58 2018 -0800

    Complete bowling game kata

[33mcommit 8eea988ea42d3ec779289816656194aa7dc45242[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Dec 9 05:02:46 2018 -0800

    wip: Bowling game scores strike
    
    Complete bowling game kata up to scoring a strike. Did not have time
    to refactor after passing test for strike in the first 25 minute time
    block. Completes slide 48.
    
    I was able to get the setup done seemingly faster than the previous.
    I did not make a note of how long setup took.
    
    TODO:
    
    - refactor
    - should score a perfect game

[33mcommit a3dbdb8b1223f869c6b8b0535a11b3e89e8c5b23[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Dec 9 04:35:01 2018 -0800

    Reset bowling game

[33mcommit a39ee705a8173326a11e0e98bb3715279e1c0ea5[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 8 05:54:29 2018 -0800

    wip: Bowling game scores spares
    
    Complete bowling game kata up to refactoring tests after passing
    test for spare. I was able to get a bit further than yesterday in a
    25 minute time block. I made it to slide 46.
    
    I believe that I can get setup done a bit faster. It took me nearly 4
    minutes to get the first failing test going. I would like to see if I
    can cut that to half the time. Perhaps writing a little schematic is
    worth the while.
    
    TODO:
    
    - should score a strike
    - should score a perfect game

[33mcommit c5737f9018b9c6d9ac144e41f7166b8ff7da9ee9[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 8 05:26:11 2018 -0800

    Reset and rename bowling-game

[33mcommit f0ec54e16ab74c53d0852ff36c32310765deb96b[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 7 05:25:59 2018 -0800

    wip: Bowling game works for some cases
    
    Create BowlingGame with roll and score methods. Passes tests for gutter
    game (all 0's), 20 pint game (all 1's), and scoring one spare (needs
    to be refactored).
    
    This commit completes the first 42 slides in this guided kata. Time
    elapsed is approx. 27 minutes.

[33mcommit 2886d5bede5432bfc58217031ad3422cf0cc0c36[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Dec 7 04:59:10 2018 -0800

    Reset bowling game

[33mcommit bb0e04110bc95d9922feee440f0afff9f9264c27[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Thu Dec 6 06:54:41 2018 -0800

    Complete bowling game
    
    Commit completes bowling game kata. Kata took approx. 1 hour to complete.

[33mcommit c14670abc999cd6e2d3e2f7ee6102c1d244f3940[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Thu Dec 6 05:55:06 2018 -0800

    Reset bowling game kata

[33mcommit c7ed1602b5b658b0a63e280dda463c9894882076[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Wed Dec 5 05:02:40 2018 -0800

    String calculator custom separators and negatives
    
    - Add method supports custom separators including special RegExp chars.
    - Add method ignored values > 1000.
    - Adds pending test for multi-character separator.

[33mcommit 17797e46f7de0b170f58ec2bd4b7c136e11207d9[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Dec 4 06:21:34 2018 -0800

    wip: string-calculator adds basic csv
    
    Adds basic sum operation on string of csv. Treats new lines as a
    separator.
    
    TODO:
    
      - pass pending test
      - test for special regex char as separator
      - throw on negative numbers
      - skip values > 1000
      - supplort multiple and multi-character separators

[33mcommit e7f61fb1b37fae164b5a80a02080b32c2e4bc71f[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Dec 4 05:55:45 2018 -0800

    Reset string-calculator

[33mcommit 08be781afac2ddcd5dd7ed4f72bce0b7daec9bd6[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Mon Dec 3 04:51:21 2018 -0800

    Complete greeter kata
    
    This commit completes the greeter kata. Adds "Good night" salutation and
    logging to greeter.greet.
    
    After comparing the "class" constructor approach to the factory, I
    can't say I have a preference. The elements which make the code easier
    to read are separating out two functions--salutation and formatName.
    
    I am curious to see how the workflow and end result turn out when
    using a strict FP approach where a greet function is returned and
    function composition is used.

[33mcommit 6e6430b92e0d9febf9b56ce16c03d13d5357f9d6[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Dec 2 05:50:31 2018 -0800

    wip: Greeter kata
    
    Greeter kata formats the name and says "Good morning", "Hello", and "Good
    evening".
    
    I did not quite finish this morning. I started a bit slowly as I changed
    my approach to use a "class" definition instead of using a factory method
    to create a greeter instance. I also wasted a bit of effort on factoring
    out a basic test function which I decided against.
    
    TODO:
      - Refactor greeter.greet
      - should say "Good night"
      - should log greeting

[33mcommit 7726508d8e4c19a455c28ae5c41dcf713ef8208e[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Dec 2 05:24:38 2018 -0800

    Reset greeter kata

[33mcommit adda4d20a7b2adb2c793411961c99564f055f543[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 1 04:47:44 2018 -0800

    Complete greeter kata
    
    This commit completes the greeter kata. I was able to satisfy all
    requirements in a single 25-minute time block. The "salutation" suite
    of tests should be refactored so that `createTest` returns a test
    function for each greeting case. Ran out of time for that.

[33mcommit 3af2049349688bfbb34ce5c21c399ab4f84bbedf[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Dec 1 04:22:32 2018 -0800

    Reset greeter kata

[33mcommit b58a1b9c5e606c6e02d65a6433966e7ff6d33eff[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Nov 30 05:26:29 2018 -0800

    Complete greeter kata
    
    This took me much longer than usual. I haven't performed this kata for
    a week and my head is foggy from a poor night's rest. I think this is
    the reason. In addition, I had to lookup syntax for chai.should at one
    point. (Using `var.should.be.true`.) Also, I took a couple minutes
    to refactor the basic test cases to use a function which took up time
    that I don't normally spend.

[33mcommit 66c2f2a2134005e86732a7fede5f3e157542fbac[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Nov 30 04:19:22 2018 -0800

    Reset greeter kata

[33mcommit a07e5cec8cff984b2969be71b7990481f1154cd1[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Thu Nov 29 04:51:58 2018 -0800

    Complete string calculator kata
    
    Adds support for delimiters of any length. ("//[#-#]")
    Adds support for multiple delimters. ("//[-][+]")
    
    It took me three 25 minute time blocks to complete the kata. Time was
    lost in the first block because there was an issue with npm preventing
    mocha from running. After spending a few minutes attempting to fix mocha,
    I tabled the issue and moved forward by running moch from npx. The other
    slowing factor is my tendency to over analyze refactoring. I'm going to
    try to spend a bit less time refactoring. However, I will still take a
    moment to refactor each time a test is passing.

[33mcommit 5757f07a87cc0e544c9a1a9351255a2dd377cb69[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Wed Nov 28 06:17:30 2018 -0800

    wip: String calc handles negatives and filters
    
    Calling add with negative numbers will throw an error which includes
    all the negative numbers parsed from the string.
    
    Add will ignore numbers greater than 1000. (e.g. `add('1,1001') == 1`)
    
    TODO:
    - Add support for delimiters of any length.
    - Add support for multiple delimiters.

[33mcommit d211d80d4be1966132f5f323621f98208bf7b628[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Nov 27 05:41:43 2018 -0800

    wip: String calc handles one custom separator
    
    This commit adds some of the required functionality for string calculator.
    After 30 minutes, the string calculator can add csv, handles an empty
    string, and support a single custom separator.
    
    TODO:
    - Should throw for negative numbers
    - Should ignore values > 1000
    - Should support multiple custom separators of varying length.

[33mcommit 2ab8fb003abd1c588cca375f6eb4c3eb38c66bf1[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Nov 27 05:10:35 2018 -0800

    reset string calc

[33mcommit 12b9d0eaf380cdf0fe4050bac8e40b285fc2ac28[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 25 05:00:42 2018 -0800

    Solve new string-calculator
    
    Delete all code from string-calculator and test.
    Solve string-calculator with new specs from osherove.com.
    
    For the first time, I was inspired to incorporate a pipe in my solution.
    The pipe makes the flow easy to read in the add method.

[33mcommit 5da8e09709da798482d8fb7873e24c4ed0956349[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 25 08:20:03 2018 -0800

    Update string-calculator readme
    
    This commit updates the readme for a different specification than was
    previously used. The new specification follows the String Calculator
    Kata on osherove.com.

[33mcommit 8f1efeb1b76e625781e794eb1565d7c007fb5c66[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sat Nov 24 05:33:24 2018 -0800

    Solve string calculator
    
    Completely delete string calculator and tests.
    Solve problem.

[33mcommit 1b82c2b569b9830596c41be2107bca6d3cf5d9d5[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Nov 23 10:20:23 2018 -0800

    Complete string calculator
    
    Delete all code and tests for string calculator.
    Solve string calculator problem.

[33mcommit 8457317080035ae27cb16f4e86ac6a76d4fce95e[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Nov 23 08:02:26 2018 -0800

    Complete string-calculator
    
    Delete all code from string-calculator.js and test.js.
    Redo solution.

[33mcommit fd9ebd82bcea5b490e8a743b042ae49bbc3a545c[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Nov 23 10:19:23 2018 -0800

    Modify string-calculator readme
    
    Remove discussion of solutions from readme.

[33mcommit 865873d27dda2750702b4f28e648d295cd8199a5[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Fri Nov 23 06:58:32 2018 -0800

    Complete greeter kata
    
    Completely delete greeter.js and greeter.test.js and write a solution.

[33mcommit f30b65728a791040f35478099a0b187aa9d3bb04[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Tue Nov 20 04:42:52 2018 -0800

    Redo greeter kata
    
    Completely delete greeter.js and greeter.test.js contents before
    performing kata. Use git diff to compare.

[33mcommit 7297fde42029cb7733db2a77d3c3407f4121fae0[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 09:55:00 2018 -0800

    Complete greeter kata
    
    This commit completes the greeter kata with 12 passing tests. Call
    `createGreeter(date, logger)` where date is a Date instance and logger
    implements a log method which accepts one string parameter.
    
    - Adds createGreeter to greeter.js with greet method.
    - Adds 12 passing tests for greeter.

[33mcommit 9b3a433bac95c755c330d7e5aab9705700c893cc[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 08:52:52 2018 -0800

    Reset greeter kata
    
    This commit resets the greeter kata to its initial state.

[33mcommit 1ec8b670238a051db989241a2e3ba55a18ec54e1[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 08:21:54 2018 -0800

    Complete greeter kata
    
    This commit adds the complete greeter kata. Use createGreeter(date, logger)
    to create a new greeter instance. Call greeter.greet(name) to log a
    greeting by passing the greeting to logger.log. Returns the greeting.
    
    The `date` parameter is optional. Defaults to current date and time.
    Should be a Date instance.
    
    The `logger` param. is option. Defaults to built-in console. Should
    implement `log` method.
    
    - Adds 12 passing unit tests for greeter.

[33mcommit c0b352050b7febda41d6fd8a279899428ff580b7[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 06:21:33 2018 -0800

    Create initial greeter kata
    
    This commit is the intial commit for the greeter kata.
    
    - Adds a README.md with a description of the kata.
    - Adds initial test and code modules with sanity check

[33mcommit 4665fdcfa9e605ca86ba007b7152b358f99d4658[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 06:19:05 2018 -0800

    Add VSCode settings for Mocha Sidebar
    
    Adds VSCode configuration settings for Mocha Sidebar Extension(MS).
    
    - Turns off code lens in tests
    - Sets file matching glob to **/*test.js

[33mcommit e26c2138f8b13b8b9742128b43b62ff147218184[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 05:17:14 2018 -0800

    Fixes mocha test runner error
    
    This commit fixes `module not found` error thrown by Mocha. Adds `tape`
    module to package dependencies.

[33mcommit 5d8a955e07ed9a1e8a5979b5df53a6874661008e[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 08:41:53 2018 -0800

    Apply lint fixes
    
    This commit applies fixes to all files with linting errors after
    modifying the lint configuration to use CommonJS plugin.

[33mcommit c1dcd99a0cb9783ced626fd5a740923320bcaa93[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 04:41:23 2018 -0800

    Adds eslint with StandardJS plugin
    
    This commit adss Eslint and StandardJS plugins to implement StandardJS
    style guide rules via eslint.
    
    Use `npm run lint .` to display ESLint output. Or, run `npm run lint
    ./[filename]` to lint a specific file. Use `npm run lint:fix [target]`
    to auto-fix all auto-fixable lint problems.
    
    Adds .eslintignore file to ignore `coverage/` directory.

[33mcommit c393aff65c4614c10f15b70316c05f06bda3b2b9[m
Author: John Desrosiers <john.desro@gmail.com>
Date:   Sun Nov 18 06:17:28 2018 -0800

    Modify .gitignore
    
    Adds entries for NodeJS and VS Code from a template generated by
    gitignore.io.

[33mcommit bf545def87e3313a27b1363fef6a2444ef5071b8[m[33m ([m[1;31morigin/prime-factors[m[33m)[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 16 06:05:41 2018 -0700

    Complete primeFactors().

[33mcommit f38f2972bc86640955e661514e0baaca30b64857[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 16 05:36:04 2018 -0700

    Delete prime factors.

[33mcommit b0efad86560dc1ddf298f41ae1749087fba42e17[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 15 06:09:58 2018 -0700

    Complete primeFactors().

[33mcommit 09f5096c9c82690a9fa3791641f14bad916a131c[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 15 05:59:34 2018 -0700

    primeFactors() Passes tests for 6 and 8.

[33mcommit cec1b20588bd99cf160b0f1a21f8f610fb119dc6[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 15 05:56:44 2018 -0700

    primeFactors() passes tests for 3 and 4.

[33mcommit 568d308b62f0af323ff7ccaff59442beed0942a8[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 15 05:42:39 2018 -0700

    primeFactors() passes tests for 1 and 2.

[33mcommit 8fa8bdbd2be26bd268cba410a065ef94ea0a0001[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 15 05:20:49 2018 -0700

    Delete prime-factors.js and test.js.

[33mcommit 491358c730a9a8b63f79a63e0df335331714cefc[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 14 05:37:49 2018 -0700

    Change Prime Factors Readme.
    
    -Remove sections discussing past solutions.
    
    -Add section describing the "movements" of the Kata based on slides
    by Bob Martin.

[33mcommit befedf7729422a4e9c9bffc991e5153f974c2ac0[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 14 05:35:44 2018 -0700

    Complete Prime Factors Kata.

[33mcommit 53c7fabbd85ba44f91eadccfdfea05051ba7d4fb[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 14 05:30:34 2018 -0700

    primeFactors(9) passes test.

[33mcommit 5584f5b1627d02a9dcf6e680e22a8b14cd04a4c7[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 14 05:18:21 2018 -0700

    primeFactors(8) passes test.

[33mcommit 8af04a6d2e63825bf36b93b152e4211cce4bae63[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 14 05:08:48 2018 -0700

    Passes tests for 1-4.

[33mcommit d9ef49a1230a719787f8df8305a6857014c3cc5c[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 14 05:05:56 2018 -0700

    Passes tests 1-3. Fails test 4.

[33mcommit 2fcffe8d5812ea3c4ce4278f1847a531fb95f77a[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 14 04:31:55 2018 -0700

    Reset prime-factors.

[33mcommit 12556c6d581fe9797d47437e60a37eef40fc4980[m[33m ([m[1;31morigin/video-store[m[33m)[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Fri May 11 07:13:15 2018 -0700

    Modify steps in readme.md.

[33mcommit 559ffabf72f0ad42436c2604c819e51a708252c1[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Fri May 11 06:37:34 2018 -0700

    Create createStatementData.js.
    
    Create createStatementData.js which exports the createStatementData
    method previously contained in statement.js.
    
    Refactor statment.js to import createStatementData().

[33mcommit fe609e77af2bb58b5575f23947a6f805c3b72e4f[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Fri May 11 06:32:18 2018 -0700

    Add htmlStatement() to statement.js.
    
    Add htmlStatement() method to exports from statement.js.
    The method returns rental statement formated as html. Accepts customer
    and movie objects as parameters.
    
    Refactor statement() in statement.js to improve readability by using
    mapd instead of reduce in createRentalLines().

[33mcommit cd04eb6a934728055bda7e9fb611cb741b6a9d09[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Fri May 11 05:58:03 2018 -0700

    Refactor using data transformation.
    
    Add createStatementData() which returns data required to print
    a rental statment. Accepts customer and movies objects paraemeters.
    
    Refactor statemtn() to call createStatementData and use the
    returned data object to render the statement.

[33mcommit 67bb769c2d661b291ae3cf9f027efd81f6cbfab2[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 14:03:42 2018 -0700

    Ready to refactor for data transformation.

[33mcommit f0efb604f9261acc0efcafc0d9e652addb2196bf[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 13:29:46 2018 -0700

    Add htmlStatement() to statements.

[33mcommit a49bc0dc76860ba6eac5be44745f9714ffa27106[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 13:22:07 2018 -0700

    Refactor using factory methods for customer and rental objects.

[33mcommit 099a3b07a55c27388e8bd54bf3de6279bf1d7b03[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 08:11:01 2018 -0700

    Ready to begin refactor for factory methods.

[33mcommit 69ffcd9577450c7f640bd15b7840da78e92ec1d1[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 07:11:14 2018 -0700

    Modify Steps section of readme.md.

[33mcommit 6c14bd4eaefe56e06f6adbc519318716926202e7[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 07:10:34 2018 -0700

    Add htmlStatement() using es6 classes.

[33mcommit 0b376050d20ca77e46f8cbcd0ff3174615c4ed1e[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 07:01:02 2018 -0700

    Create Customer and Rental classes and refactor statement.

[33mcommit 82c3575ab2dd0861bf72130e8a3de9633339e6d9[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 06:31:12 2018 -0700

    Ready for next refactor.

[33mcommit e7793adc290284cd86cd95c3dc9219ae9246abcf[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 06:27:53 2018 -0700

    Revert back to refactor for format param.

[33mcommit ba51bacec6997e4e36f4a5f7cff80ff0030a5f8c[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 06:23:57 2018 -0700

    Revert "Revert back to state before output param refactor."
    
    This reverts commit 2af616163a5608a52c770506c2a8d3302eb649c9.

[33mcommit 2af616163a5608a52c770506c2a8d3302eb649c9[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 06:21:16 2018 -0700

    Revert back to state before output param refactor.

[33mcommit 7cb7b9028bbb148b1742dff32b6c6181c1c348c2[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 06:04:32 2018 -0700

    Refactor to use top level functions.

[33mcommit 8d624c26e9a1d5a1d43c5b6cbccbf0ee8c329062[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 05:25:34 2018 -0700

    Refactor for format param.

[33mcommit fead7c65c8515209eda53428b17eb9c35481bcdd[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu May 10 04:34:46 2018 -0700

    Decompose statement into smaller funcs.

[33mcommit 0ed45e010d83ba45d0816fe353bb691960cc1719[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 9 07:22:30 2018 -0700

    Modify readme.

[33mcommit 41c212050892fde2e28c5e75ee5a036a9df98ce5[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 9 07:22:11 2018 -0700

    Factor out movieFor, amountFor, frequentRenterPointsFor.

[33mcommit 3e5bab8029b2c37407aee38a868b52309c953ee3[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 9 06:27:19 2018 -0700

    Write initial tests.

[33mcommit bc81443022111007d9fa4d843bac390fe525a0fa[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 9 05:50:25 2018 -0700

    Add video-store kata to collection. Initial commit.

[33mcommit 54da9c1107b76e4f737630d9331085b66f5859ca[m
Merge: be6d87a d9b161f
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 8 06:29:47 2018 -0700

    Merge branch 'master' of github.com:median-man/javascript-katas

[33mcommit be6d87a13295ccb68fe626205286b87bf121006b[m
Merge: a23c3bf b49bbce
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 8 06:28:40 2018 -0700

    Merge branch 'master' of github.com:median-man/javascript-katas

[33mcommit d9b161f5b3d9f1329f71ccb907548a4d88f37cbd[m
Merge: a23c3bf b49bbce
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 8 06:28:40 2018 -0700

    Merge branch 'master' of github.com:median-man/javascript-katas

[33mcommit a23c3bfcaf414983d252967a9731dac180fd969f[m[33m ([m[1;31morigin/bowling-game[m[33m)[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 8 06:28:17 2018 -0700

    Complete bowling game kata.

[33mcommit 2e9e7d56ca2f61f42fb54808c544da5805d2da0c[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue May 8 04:31:34 2018 -0700

    Reset bowling game kata.

[33mcommit b49bbce392b8328092015dc639a7f00ba9bc499c[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon May 7 10:42:31 2018 -0700

    Add future katas section to readme.md.

[33mcommit d6b9b9e2e9a94e7fb54a2147ae0c31215dc419aa[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat May 5 11:03:04 2018 -0700

    Fix bowling/readme.md.

[33mcommit 1dbb1fe97ae38f1e23f7cd8059feceb0ffa7f63a[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat May 5 11:00:46 2018 -0700

    Complete bowling game.

[33mcommit 8f29531dfa55ca68b5a66d49ade03d3ff499c407[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat May 5 10:14:05 2018 -0700

    Reset bowling game kata.

[33mcommit 3267e5767a58a993d861504fdea1966d450544fa[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat May 5 10:13:39 2018 -0700

    Complete bowling game kata.

[33mcommit 0dff50ea66bb527efea1fd99fd0c2b4f2c069407[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat May 5 08:11:35 2018 -0700

    Add Bowling Game entry to readme.

[33mcommit 7e12a386134e1c98820d2b8565a9c4266f24936b[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 2 07:05:08 2018 -0700

    Complete primeFactors Kata.

[33mcommit d2968f7ec200e0d9519fd92162f5bc08d81cf3d3[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed May 2 06:24:35 2018 -0700

    Reset prime-factors.

[33mcommit da933504d1befdb30c71f877599b2efc0b567076[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat Apr 21 11:45:16 2018 -0700

    Solve game-of-life (second time)

[33mcommit bc7c155b47bffdb29ae5c5344356d15a149413b4[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat Apr 21 04:39:33 2018 -0700

    reset game-of-life

[33mcommit 5110bacd245434a72051a8121f73e48e17f99974[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Fri Apr 20 06:47:56 2018 -0700

    Solve string-calculator (second time)

[33mcommit 051de3e978e3d35e487de136e65223c434fc8cad[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Fri Apr 20 04:56:22 2018 -0700

    Reset string-calculator

[33mcommit 36f53c9ff7eace52c71df8cc1d77efc4c788bf23[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu Apr 19 05:12:21 2018 -0700

    Solve fizz-buzz (second time)

[33mcommit 8aad288b7a489b7fe9181d0feac1399cf29039fb[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu Apr 19 04:58:21 2018 -0700

    Reset fizz-buzz

[33mcommit 14ea372912e3664a6c89ab51bc95bf4c866f9729[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed Apr 18 07:02:42 2018 -0700

    Solve prime-factors (third time)

[33mcommit 67e193e34950926c0eb4c3e19ecc7d44d7f0a4f5[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed Apr 18 06:12:58 2018 -0700

    Delete prime-factors solution

[33mcommit 9a2a0bc5d924ab79e5d9737e761717d8cbb69c0d[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 16 06:16:15 2018 -0700

    Solve word-wrap

[33mcommit b22617375432dce0998132263373a16543460422[m[33m ([m[1;31morigin/mine-sweeper[m[33m)[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat Apr 14 08:04:53 2018 -0700

    Complete mine-sweeper kata

[33mcommit a695437f93465c25ba69cbad9227344db777a5a7[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Fri Apr 13 06:54:45 2018 -0700

    Modify error handling for field dimensions.
    
    Change throwIfInvalidFieldDimensions function and change tests.
    Throws a single error for any violation with field dimensions in the
    input passed to makeFields.

[33mcommit 00301cf7f41f6b16166c968453e1dbf5c8c89a84[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu Apr 12 05:58:08 2018 -0700

    Add next suite for multiple fields and first failing test.
    
    Fix text in single field test suite.
    Add test suite for multiple fields and first test.
    Tests: 22 passing, 1 failing

[33mcommit df520f2441c5f9e9f8f019a96254b6faf8695291[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu Apr 12 05:48:00 2018 -0700

    Add CellGrid class and refactor.
    
    Create CellGrid class and refactor mine-sweeper.js to implement the
    class. Refactored to prepare for implementation of
    making multiple fields.
    
    Passing 22 tests.
    
    Fix text messages on a few tests.

[33mcommit f10f800d09ddcb4ee33cbcd5c95ff7f06c54e7d2[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Thu Apr 12 04:25:53 2018 -0700

    Pass all tests for a single field input. (22 tests passing)
    
    Modify adjacentCells function to handle input for any sized single
    field in the input to makeFields.
    
    Passing 22 tests.
    
    Modify tests. Add additional single field tests. Refactor tests for
    single field. Organize sub-suites by the input field dimensions.

[33mcommit 729d930a183d17479f42e2ba50f8602af01d7e2b[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed Apr 11 08:02:33 2018 -0700

    Modify adjacentCells function. WIP.
    
    Refactoring adjacentCells in progress. See TODO.
    Tests: 18 passing, 0 pending, 0 fail.

[33mcommit 463ca5bc3797dfcbc5a9009596ce18a9c7cec8b2[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed Apr 11 06:13:04 2018 -0700

    Refactor mine-sweeper. Passing 15 tests. 1 pending test.

[33mcommit 3e9b035a1ef49d2c720743e5f92c6b2b2720f283[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Wed Apr 11 05:11:16 2018 -0700

    Create Cell class and refactor.

[33mcommit aa418cf7f1beda07188e5bb02a2a3ad0c181ee0c[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Tue Apr 10 06:49:57 2018 -0700

    Create makeFields function. (WIP)
    
    Failing first test for 3x1 field.
    Passing tests for throwing errors on bad input.
    Passing tests for a single 1x1 and 2x1 fields.

[33mcommit 79aa2b60fc33db32bb68f81d82e6fb81f75b7631[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 9 06:56:59 2018 -0700

    Modify mine-sweeper.

[33mcommit 284bc9f1eee07e809858289fae27700408381b53[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 9 05:52:34 2018 -0700

    Add readme for mine-sweeper kata

[33mcommit 7640406accf3a8e64ae0a4141c64dbf501708f61[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 8 20:12:27 2018 -0700

    Add game-of-life solution.

[33mcommit f8429b07cf6de0b87bc0dbf8d8959d5fb0f896d2[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 8 10:12:11 2018 -0700

    Add string-calculator first solution

[33mcommit c9c8bdf856eed3c22dea88de356948eb76304a61[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 8 06:51:51 2018 -0700

    add string-calculator kata

[33mcommit 829a520e25eba4cdf17755919e972178f46e27bf[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 8 06:27:32 2018 -0700

    complete fizz-buzz solution

[33mcommit 7583bd75e9b12eb106852425c447c24a5a85f37d[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 8 06:11:18 2018 -0700

    fizz buzz initial commit

[33mcommit c44c0f65bc4256ebcdc4d1f107b665208fa40b2f[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 8 05:46:44 2018 -0700

    add syntax highlighting for code in prime-factors/readme.md

[33mcommit 7b1de71bb0968d1d89ba64bcaeb414b75bf6439e[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 8 05:43:04 2018 -0700

    solved prime-factors for second time

[33mcommit 24540f67658a8e967a636d819364bc4ca9caec15[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sat Apr 7 17:38:58 2018 -0700

    solved prime-factors

[33mcommit e671b175da3e1d6b5c63a65bab49ef9ae0ef54ac[m
Merge: 37d786d cd8b959
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 2 07:39:17 2018 -0700

    Merge pull request #2 from median-man/is-prime-01
    
    Is prime 01

[33mcommit 37d786d895a49e10777329c2bb921d4bb2858726[m
Merge: 60237f5 c5b7f91
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 2 07:38:53 2018 -0700

    Merge pull request #1 from median-man/word-wrap-03
    
    Third Word Wrap Kata complete

[33mcommit cd8b959529440d0bbb6e4812cc3d946ea3f6c36d[m[33m ([m[1;31morigin/is-prime-01[m[33m)[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 2 07:32:50 2018 -0700

    Complete Is Prime Kata for the first time.

[33mcommit a1a619cf1d1bded5e730cc3a35590015c5a61393[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 2 04:45:08 2018 -0700

    Add Is Prime kata

[33mcommit c5b7f91933d912b519f570c044757c8a2eee949d[m[33m ([m[1;31morigin/word-wrap-03[m[33m)[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Mon Apr 2 04:31:39 2018 -0700

    Third Word Wrap Kata complete

[33mcommit 60237f5b69996a04102aa973eca6013af92e1e6b[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 21:17:12 2018 -0700

    Modify word-wrap/history.md

[33mcommit 4f04521be4ab67a8367a5f1a3c8a42c10d141502[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 21:06:22 2018 -0700

    Second Word Wrap Kata complete

[33mcommit bcd5d1a04d755da250f861e900db39503f61f7e0[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 19:30:46 2018 -0700

    word wrap splits one word multiple times

[33mcommit 3c743c6e0f00c5f2fc780367f4ddcfa5220aa058[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 18:41:24 2018 -0700

    delete code from word-wrap

[33mcommit e4baec3f8be33610dcbb5c84c8ce15a27b6a38d3[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 18:40:44 2018 -0700

    Add history.md to word-wrap

[33mcommit 9900688af7b336efc1c6f7cab20a171d59325ef1[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 14:07:51 2018 -0700

    First Word Wrap Kata complete.

[33mcommit 03f2e1396172796dbf46b6cd8a496ec592478514[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 14:07:20 2018 -0700

    Add word-wrap to readme

[33mcommit 5c03c0f6d051c6afafd6b780cc2154dcfbf6dcb7[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 14:06:45 2018 -0700

    Add gitignore, eslint config, and dependencies

[33mcommit 448be4cd3ec91f0469989d3a83d55ae24298e358[m
Author: John Desrosiers <johndrunner@yahoo.com>
Date:   Sun Apr 1 10:25:10 2018 -0700

    initial commit
