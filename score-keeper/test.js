require('chai').should()

const scoreKeeper = require('./score-keeper')

describe('score-keeper kata', () => {
  describe('printScore', () => {
    const { printScore } = scoreKeeper
    it('should print zeros', () => {
      printScore(0, 0).should.equal('000:000')
    })

    it('should print team A score', () => {
      printScore(1, 0).should.equal('001:000')
    })

    it('should print team B score', () => {
      printScore(1, 1).should.equal('001:001')
    })

    it('should print scores with three digits', () => {
      printScore(123, 123).should.equal('123:123')
    })
  })

  describe('score points', () => {
    it('should score points for team A', () => {
      let score = [0, 0]
      scoreKeeper.addOneForTeamA(score).should.eql([1, 0])
    })

    it.skip('should score points for team B', () => {
      scoreKeeper.addOneForTeamA(0).should.equal(1)
      scoreKeeper.addOneForTeamA(1).should.equal(2)
    })
  })
})
