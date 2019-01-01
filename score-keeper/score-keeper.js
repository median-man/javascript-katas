const SCORE_KEEPING_METHODS_CONFIG = [
  ['addOneForTeam', 1],
  ['addTwoForTeam', 2],
  ['addThreeForTeam', 3]
]

function printTeamScore (points) {
  const scoreSize = 3
  points = points.toString()
  const leadingZeros = '0'.repeat(scoreSize - points.length)
  return leadingZeros + points
}

function createScoreKeeper () {
  let teamAScore = 0
  let teamBScore = 0

  const addPointsForTeamA = points => {
    teamAScore += points
  }
  const addPointsForTeamB = points => {
    teamBScore += points
  }

  const addTeamAPointsMethodToObj = (obj, [name, points]) => {
    obj[name] = () => addPointsForTeamA(points)
    return obj
  }

  const addTeamBPointsMethodToObj = (obj, [name, points]) => {
    obj[name] = () => addPointsForTeamB(points)
    return obj
  }

  const createTeamScoreMethods = (team, addPointsMethodToObj) =>
    SCORE_KEEPING_METHODS_CONFIG.map(([name, points]) => [
      name + team,
      points
    ]).reduce(addPointsMethodToObj, {})

  const methodsForTeamA = createTeamScoreMethods('A', addTeamAPointsMethodToObj)

  const methodsForTeamB = createTeamScoreMethods('B', addTeamBPointsMethodToObj)

  const printScore = () =>
    [teamAScore, teamBScore].map(printTeamScore).join(':')

  const scoreKeeper = { printScore }

  Object.assign(scoreKeeper, methodsForTeamA, methodsForTeamB)

  return scoreKeeper
}

module.exports = { createScoreKeeper }
