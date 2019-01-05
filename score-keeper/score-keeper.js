function renderPoints (points) {
  points = points.toString()
  const leadingZeros = '0'.repeat(3 - points.length)
  return leadingZeros + points
}

function createScoreKeeper () {
  let teamAScore = 0
  let teamBScore = 0
  const scoreKeeper = {
    printScore: () => {
      return [teamAScore, teamBScore].map(renderPoints).join(':')
    }
  }

  const methodNames = ['addOneForTeam', 'addTwoForTeam', 'addThreeForTeam']

  methodNames.forEach((method, index) => {
    const points = index + 1
    scoreKeeper[`${method}A`] = () => {
      teamAScore += points
    }
    scoreKeeper[`${method}B`] = () => {
      teamBScore += points
    }
  })

  return scoreKeeper
}

module.exports = { createScoreKeeper }
