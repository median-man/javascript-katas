function createBowlingGame () {
  let score = 0
  return {
    roll: pins => {
      score += pins
    },
    score: () => score
  }
}

module.exports = { createBowlingGame }
