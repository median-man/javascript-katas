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
      const score = [0, 0]
      scoreKeeper.addOneForTeamA(score).should.eql([1, 0])
    })

    it('should score points for team B', () => {
      const score = [0, 0]
      scoreKeeper.addOneForTeamB(score).should.eql([0, 1])
    })

    it('should score two points for teams', () => {
      let score = [0, 0]
      score = scoreKeeper.addTwoForTeamA(score)
      score = scoreKeeper.addTwoForTeamB(score)
      score.should.eql([2, 2])
    })

    it('should score three points for teams', () => {
      let score = [0, 0]
      score = scoreKeeper.addThreeForTeamA(score)
      score = scoreKeeper.addThreeForTeamB(score)
      score.should.eql([3, 3])
    })
  })

  describe('functional test', () => {
    it('should present score for a match', () => {
      let score = [0, 0]
      scoreKeeper.printScore(...score).should.equal('000:000')

      for (let i = 0; i < 100; i += 1) {
        score = scoreKeeper.addOneForTeamA(score)
        score = scoreKeeper.addOneForTeamB(score)
      }
      scoreKeeper.printScore(...score).should.equal('100:100')

      score = scoreKeeper.addTwoForTeamA(score)
      score = scoreKeeper.addThreeForTeamB(score)
      scoreKeeper.printScore(...score).should.equal('102:103')
    })
  })
})
