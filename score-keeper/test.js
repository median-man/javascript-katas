require('chai').should()

const { createScoreKeeper } = require('./score-keeper')

describe('score-keeper kata', () => {
  describe('ScoreKeeper', () => {
    let scoreKeeper

    beforeEach(() => {
      scoreKeeper = createScoreKeeper()
    })

    it('should return no score', () => {
      scoreKeeper.score().should.equal('000:000')
    })

    it('should score one point for team A', () => {
      scoreKeeper.scoreOneForTeamA()
      scoreKeeper.score().should.equal('001:000')
    })

    const scoreOneForTeamAManyTimes = n => {
      for (let i = 0; i < n; i += 1) {
        scoreKeeper.scoreOneForTeamA()
      }
    }

    it('should display score greater than 9', () => {
      scoreOneForTeamAManyTimes(10)
      scoreKeeper.score().should.equal('010:000')
    })

    it('should display score greater than 99', () => {
      scoreOneForTeamAManyTimes(100)
      scoreKeeper.score().should.equal('100:000')
    })

    it('should display score for team B', () => {
      scoreKeeper.scoreOneForTeamB()
      scoreKeeper.score().should.equal('000:001')
    })
  })
})
