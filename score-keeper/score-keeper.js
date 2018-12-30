const teamScoreSize = () => 3

const padChar = () => '0'

const padSize = valueLength => teamScoreSize() - valueLength

const padLeft = s => padChar().repeat(padSize(s.length)) + s

const renderTeamScore = points => padLeft(points.toString())

const renderScore = scores => scores.map(renderTeamScore).join(':')

const addPoints = (score, points) => score + points

function createScoreKeeper () {
  let teamAScore = 0
  let teamBScore = 0

  const printScore = () => renderScore([teamAScore, teamBScore])

  const addPointsToTeamA = points => {
    teamAScore = addPoints(teamAScore, points)
  }

  const addPointsToTeamB = points => {
    teamBScore = addPoints(teamBScore, points)
  }

  const createScoreMethods = ([name, points]) => ({
    [`${name}ForTeamA`]: () => addPointsToTeamA(points),
    [`${name}ForTeamB`]: () => addPointsToTeamB(points)
  })

  const scoringMethods = [
    ['addOnePoint', 1],
    ['addTwoPoints', 2],
    ['addThreePoints', 3]
  ].map(createScoreMethods)

  return Object.assign({ printScore }, ...scoringMethods)
}

module.exports = { createScoreKeeper }
