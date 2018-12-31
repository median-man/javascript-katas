require('chai').should()

const { printScore, createScoreKeeper } = require('./score-keeper')

describe('score-keeper kata', () => {
  describe('printScore', () => {
    it('should display "000:000" when there is no score', () => {
      printScore(0, 0).should.equal('000:000')
    })

    it('should display "001:000"', () => {
      printScore(1, 0).should.equal('001:000')
    })

    it('should display "010:000"', () => {
      printScore(10, 0).should.equal('010:000')
    })

    it('should display "000:100"', () => {
      printScore(0, 100).should.equal('000:100')
    })
  })

  describe('scoreKeeper', () => {
    it('should have methods to add one point', () => {
      const scoreKeeper = createScoreKeeper([{ name: 'scoreOne', points: 1 }])
      scoreKeeper.scoreOneForTeamA([0, 0]).should.eql([1, 0])
      scoreKeeper.scoreOneForTeamB([0, 0]).should.eql([0, 1])
    })

    it('should increment given score array', () => {
      const scoreKeeper = createScoreKeeper([{ name: 'scoreOne', points: 1 }])
      scoreKeeper.scoreOneForTeamA([1, 0]).should.eql([2, 0])
      scoreKeeper.scoreOneForTeamB([0, 1]).should.eql([0, 2])
    })

    it("should not change other team's score", () => {
      const scoreKeeper = createScoreKeeper([{ name: 'scoreOne', points: 1 }])
      scoreKeeper.scoreOneForTeamA([1, 1]).should.eql([2, 1])
      scoreKeeper.scoreOneForTeamB([1, 1]).should.eql([1, 2])
    })

    it('should have methods to score two points', () => {
      const scoreKeeper = createScoreKeeper([{ name: 'scoreTwo', points: 2 }])
      scoreKeeper.scoreTwoForTeamA([0, 0]).should.eql([2, 0])
      scoreKeeper.scoreTwoForTeamB([0, 0]).should.eql([0, 2])
    })

    it('should have methods to score one or two points', () => {
      const scoreKeeper = createScoreKeeper([
        { name: 'scoreOne', points: 1 },
        { name: 'scoreTwo', points: 2 }
      ])
      scoreKeeper.scoreTwoForTeamA([0, 0]).should.eql([2, 0])
      scoreKeeper.scoreTwoForTeamB([0, 0]).should.eql([0, 2])
    })
  })

  describe('function test', () => {
    const scoreKeeper = createScoreKeeper([
      { name: 'scoreOne', points: 1 },
      { name: 'scoreTwo', points: 2 },
      { name: 'scoreThree', points: 3 }
    ])

    let score = [0, 0]
    printScore(...score).should.equal('000:000')

    score = scoreKeeper.scoreThreeForTeamA(score)
    score.should.eql([3, 0])

    score = scoreKeeper.scoreTwoForTeamB(score)
    score.should.eql([3, 2])

    score = scoreKeeper.scoreOneForTeamA(score)
    score.should.eql([4, 2])

    for (let i = 0; i < 100; i += 1) {
      score = scoreKeeper.scoreOneForTeamA(score)
      score = scoreKeeper.scoreOneForTeamB(score)
    }

    score.should.eql([104, 102])
    printScore(...score).should.equal('104:102')
  })
})
