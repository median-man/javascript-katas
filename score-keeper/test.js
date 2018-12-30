require('chai').should()

const { createScoreKeeper } = require('./score-keeper')

describe('score-keeper kata', () => {
  describe('ScoreKeeper', () => {
    let scoreKeeper

    beforeEach(() => {
      scoreKeeper = createScoreKeeper()
    })

    it('should print starting score', () => {
      scoreKeeper.printScore().should.equal('000:000')
    })

    it('should track team A score', () => {
      scoreKeeper.addOnePointForTeamA()
      scoreKeeper.printScore().should.equal('001:000')
    })

    it('should track team B score', () => {
      scoreKeeper.addOnePointForTeamB()
      scoreKeeper.printScore().should.equal('000:001')
    })

    const score10Points = () => {
      for (let i = 0; i < 10; i += 1) {
        scoreKeeper.addOnePointForTeamB()
      }
    }

    it('should print score > 9', () => {
      score10Points()
      scoreKeeper.printScore().should.equal('000:010')
    })

    it('should increase score by 2 points', () => {
      scoreKeeper.addTwoPointsForTeamA()
      scoreKeeper.addTwoPointsForTeamB()
      scoreKeeper.printScore().should.equal('002:002')
    })

    it('should increase score by 3 points', () => {
      scoreKeeper.addThreePointsForTeamA()
      scoreKeeper.addThreePointsForTeamB()
      scoreKeeper.printScore().should.equal('003:003')
    })
  })
})
