function renderPoints (points) {
  const scoreSize = 3
  const pointsString = points.toString()
  const leadingZeros = '0'.repeat(scoreSize - pointsString.length)
  return leadingZeros + pointsString
}

function createScoreKeeper () {
  let teamAScore = 0
  let teamBScore = 0

  const createTeamAScoreMethod = points => () => {
    teamAScore += points
  }

  const createTeamBScoreMethod = points => () => {
    teamBScore += points
  }

  const scoreKeeper = {
    printScore: () => [teamAScore, teamBScore].map(renderPoints).join(':')
  }

  const scoringConfig = [['One', 1], ['Two', 2], ['Three', 3]]

  const getMethodName = (number, team) => `score${number}ForTeam${team}`

  scoringConfig.forEach(([number, points]) => {
    scoreKeeper[getMethodName(number, 'A')] = createTeamAScoreMethod(points)
    scoreKeeper[getMethodName(number, 'B')] = createTeamBScoreMethod(points)
  })

  return scoreKeeper
}

module.exports = { createScoreKeeper }
