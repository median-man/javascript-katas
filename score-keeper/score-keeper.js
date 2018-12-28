const teamScoreToString = score => {
  let result = score.toString()
  while (result.length < 3) {
    result = `0${result}`
  }
  return result
}

function createScoreKeeper (config) {
  let teamAScore = 0
  let teamBScore = 0

  const increaseTeamAScore = points => {
    teamAScore += points
  }

  const increaseTeamBScore = points => {
    teamBScore += points
  }

  const scoreKeeper = {
    score: () => {
      return `${teamScoreToString(teamAScore)}:${teamScoreToString(teamBScore)}`
    }
  }

  const addScoreMethodForTeams = (points) => {
    scoreKeeper[`score${points}ForTeamA`] = () => increaseTeamAScore(points)
    scoreKeeper[`score${points}ForTeamB`] = () => increaseTeamBScore(points)
  }

  config.forEach(addScoreMethodForTeams)

  return scoreKeeper
}

module.exports = { createScoreKeeper }
