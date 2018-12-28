require('chai').should()

const { createScoreKeeper } = require('./score-keeper')

describe('score-keeper kata', () => {
  describe('ScoreKeeper', () => {
    let scoreKeeper

    beforeEach(() => {
      scoreKeeper = createScoreKeeper([1, 2])
    })

    it('should return no score', () => {
      scoreKeeper.score().should.equal('000:000')
    })

    const testScoreMethod = (methodName, expectedScoreString) => {
      scoreKeeper[methodName]()
      scoreKeeper.score().should.equal(expectedScoreString)
    }

    it('should score one point for team A', () => {
      testScoreMethod('score1ForTeamA', '001:000')
    })

    it('should score two points for team A', () => {
      testScoreMethod('score2ForTeamA', '002:000')
    })

    it('should add scoring methods from configuration', () => {
      const scoreKeeper = createScoreKeeper([1, 2, 3])
      scoreKeeper.score3ForTeamA()
      scoreKeeper.score().should.equal('003:000')
    })

    it('should not add scoring methods for team A not in configuration', () => {
      const scoreKeeper = createScoreKeeper([1, 3])
      scoreKeeper.should.not.have.property('score2ForTeamA')
    })

    it('should not add scoring methods for team B not in configuration', () => {
      const scoreKeeper = createScoreKeeper([1, 3])
      scoreKeeper.should.not.have.property('score2ForTeamB')
    })

    it('should only have scoring methods for points in configuration', () => {
      const scoreKeeper = createScoreKeeper([])
      scoreKeeper.should.not.have.property('score1ForTeamB')
      scoreKeeper.should.not.have.property('score1ForTeamA')
    })

    const score1ForTeamAManyTimes = n => {
      for (let i = 0; i < n; i += 1) {
        scoreKeeper.score1ForTeamA()
      }
    }

    it('should display score greater than 9', () => {
      score1ForTeamAManyTimes(10)
      scoreKeeper.score().should.equal('010:000')
    })

    it('should display score greater than 99', () => {
      score1ForTeamAManyTimes(100)
      scoreKeeper.score().should.equal('100:000')
    })

    it('should display score for team B', () => {
      scoreKeeper.score1ForTeamB()
      scoreKeeper.score().should.equal('000:001')
    })

    it('should have methods to score 1, 2, and 3 points for each team', () => {
      const scoreKeeper = createScoreKeeper([1, 2, 3])
      for (let points = 1; points < 4; points += 1) {
        scoreKeeper[`score${points}ForTeamA`]()
        scoreKeeper[`score${points}ForTeamB`]()
      }
      scoreKeeper.score().should.equal('006:006')
    })
  })
})
