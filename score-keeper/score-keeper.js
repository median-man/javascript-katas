function createScoreKeeper () {
  let teamAScore = 0
  let teamBScore = 0

  const renderTeamScore = points => {
    const scoreStringSize = 3
    const pointsString = points.toString()
    return '0'.repeat(scoreStringSize - pointsString.length) + pointsString
  }

  const scoreKeeper = {
    printScore: () => {
      return `${renderTeamScore(teamAScore)}:${renderTeamScore(teamBScore)}`
    }
  }

  const points = ['One', 'Two']
  for (let i = 0; i < points.length; i += 1) {
    scoreKeeper[`add${points[i]}PointsForTeamA`] = () => {
      teamAScore += i + 1
    }
    scoreKeeper[`add${points[i]}PointsForTeamB`] = () => {
      teamAScore += i + 1
    }
  }

  return {
    printScore: () => {
      return `${renderTeamScore(teamAScore)}:${renderTeamScore(teamBScore)}`
    },
    addOnePointForTeamA: () => {
      teamAScore += 1
    },
    addOnePointForTeamB: () => {
      teamBScore += 1
    },
    addTwoPointsForTeamA: () => {
      teamAScore += 2
    },
    addTwoPointsForTeamB: () => {
      teamBScore += 2
    }
  }
}

module.exports = { createScoreKeeper }
