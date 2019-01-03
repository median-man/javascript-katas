const addLeadingZeros = (size, points) => {
  const value = points.toString()
  const leadingZeros = '0'.repeat(size - value.length)
  return leadingZeros + value
}

function printScore (pointsA, pointsB) {
  const scoreSize = 3
  return [pointsA, pointsB]
    .map(points => addLeadingZeros(scoreSize, points))
    .join(':')
}

function addPointsForTeam (currentScore, points) {
  const [scoreA, scoreB] = currentScore
  const [pointsA, pointsB] = points
  return [scoreA + pointsA, scoreB + pointsB]
}

function addScoringMethodToObj (obj, [methodName, points]) {
  return Object.assign(obj, {
    [methodName + 'ForTeamA']: score => addPointsForTeam(score, [points, 0]),
    [methodName + 'ForTeamB']: score => addPointsForTeam(score, [0, points])
  })
}

function createScoringMethods (scoringConfig) {
  return scoringConfig.reduce(addScoringMethodToObj, {})
}

const scoringConfig = [['addOne', 1], ['addTwo', 2], ['addThree', 3]]

module.exports = { ...createScoringMethods(scoringConfig), printScore }
