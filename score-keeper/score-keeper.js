const teamScoreToString = score => {
  let result = score.toString()
  while (result.length < 3) {
    result = `0${result}`
  }
  return result
}

function createScoreKeeper () {
  let teamAScore = 0
  let teamBScore = 0

  return {
    score: () => {
      return `${teamScoreToString(teamAScore)}:${teamScoreToString(teamBScore)}`
    },
    scoreOneForTeamA: () => {
      teamAScore += 1
    },
    scoreOneForTeamB: () => {
      teamBScore += 1
    }
  }
}

module.exports = { createScoreKeeper }
