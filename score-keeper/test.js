require('chai').should()

const { createScoreKeeper } = require('./score-keeper')

describe('score keeper kata', () => {
  describe('scoreKeeper', () => {
    let scoreKeeper

    beforeEach(() => {
      scoreKeeper = createScoreKeeper()
    })

    it('should print no score', () => {
      scoreKeeper.printScore().should.equal('000:000')
    })

    it('should print one point for team A', () => {
      scoreKeeper.addOneForTeamA()
      scoreKeeper.printScore().should.equal('001:000')
    })

    it('should print one point for team B', () => {
      scoreKeeper.addOneForTeamB()
      scoreKeeper.printScore().should.equal('000:001')
    })

    const score100PointsForBothTeams = () => {
      for (let i = 0; i < 100; i += 1) {
        scoreKeeper.addOneForTeamA()
        scoreKeeper.addOneForTeamB()
      }
    }

    it('should print points greater than 99', () => {
      score100PointsForBothTeams()
      scoreKeeper.printScore().should.equal('100:100')
    })

    it('should score two points for team A', () => {
      scoreKeeper.addTwoForTeamA()
      scoreKeeper.printScore().should.equal('002:000')
    })

    it('should score two points for team B', () => {
      scoreKeeper.addTwoForTeamB()
      scoreKeeper.printScore().should.equal('000:002')
    })

    it('should score three points for teams', () => {
      scoreKeeper.addThreeForTeamA()
      scoreKeeper.addThreeForTeamB()
      scoreKeeper.printScore().should.equal('003:003')
    })
  })
})
