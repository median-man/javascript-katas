require('chai').should()

const { createScoreKeeper } = require('./score-keeper')

describe('score-keeper kata', () => {
  describe('scoreKeeper', () => {
    let scoreKeeper

    beforeEach(() => {
      scoreKeeper = createScoreKeeper()
    })

    it('should print initial score', () => {
      scoreKeeper.printScore().should.equal('000:000')
    })

    it('should score a point for team A', () => {
      scoreKeeper.scoreOneForTeamA()
      scoreKeeper.printScore().should.equal('001:000')
    })

    it('should score a point for team B', () => {
      scoreKeeper.scoreOneForTeamB()
      scoreKeeper.printScore().should.equal('000:001')
    })

    it('should score two points for teams', () => {
      scoreKeeper.scoreTwoForTeamA()
      scoreKeeper.scoreTwoForTeamB()
      scoreKeeper.printScore().should.equal('002:002')
    })

    it('should score three points for teams', () => {
      scoreKeeper.scoreThreeForTeamA()
      scoreKeeper.scoreThreeForTeamB()
      scoreKeeper.printScore().should.equal('003:003')
    })

    it('should print scores > 9', () => {
      for (let i = 0; i < 10; i += 1) {
        scoreKeeper.scoreOneForTeamA()
        scoreKeeper.scoreOneForTeamB()
      }
      scoreKeeper.printScore().should.equal('010:010')
    })
  })
})
