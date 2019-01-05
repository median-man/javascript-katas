require('chai').should()

const { createScoreKeeper } = require('./score-keeper')

describe('score-keeper kata', () => {
  describe('scoreKeeper', () => {
    let scoreKeeper

    beforeEach(() => {
      scoreKeeper = createScoreKeeper()
    })

    it('should print zero point game', () => {
      scoreKeeper.printScore().should.equal('000:000')
    })

    const scorePoints  = methodName => {
      scoreKeeper[`${methodName}A`]()
      scoreKeeper[`${methodName}B`]()
    }

    it('should score one point', () => {
      scorePoints('addOneForTeam')
      scoreKeeper.printScore().should.equal('001:001')
    })

    it('should score two points', () => {
      scorePoints('addTwoForTeam')
      scoreKeeper.printScore().should.equal('002:002')
    })

    it('should score three points', () => {
      scorePoints('addThreeForTeam')
      scoreKeeper.printScore().should.equal('003:003')
    })

    it('should print scores > 9', () => {
      for (let i = 0; i < 10; i += 1) {
        scorePoints('addOneForTeam')
      }
      scoreKeeper.printScore().should.equal('010:010')
    })

    it('should print scores > 99', () => {
      for (let i = 0; i < 100; i += 1) {
        scorePoints('addOneForTeam')
      }
      scoreKeeper.printScore().should.equal('100:100')
    })
  })
})
