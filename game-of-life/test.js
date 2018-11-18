const { expect } = require('chai')
const gameOfLife = require('./game-of-life.js')

describe('gameOfLife', () => {
  it('exists', () => expect(gameOfLife).to.exist)

  describe('nextGen', () => {
    const { nextGen } = gameOfLife

    it('is a function', () => expect(nextGen).is.a('function'))

    const testNextGen = (input, expected) => {
      const actual = nextGen(input)
      expect(actual).to.equal(expected)
    }

    describe('when previous generation is a single line', () => {
      it('returns "."', () => testNextGen('.', '.'))
      it('returns ".." when input is ".."', () => testNextGen('..', '..'))
      it('returns ".." when input is "*."', () => testNextGen('*.', '..'))
      it('returns ".." when input is "**"', () => testNextGen('**', '..'))
      it('returns ".*." when input is "***"', () => testNextGen('***', '.*.'))
      it('returns ".*.." when input is "***."', () => testNextGen('***.', '.*..'))
      it('returns "..*." when input is ".***"', () => testNextGen('.***', '..*.'))
    })

    describe('when previous gen has two lines', () => {
      it('returns ".\\n." when input is ".\\n."', () => testNextGen('.\n.', '.\n.'))
      const createCharAtTest = testInput => (pos, expected) => {
        const result = nextGen(testInput)
        const rows = result.split(/\n/g)
        const [row, col] = pos.split(',')
        const actual = rows[row][col]
        expect(actual).to.equal(expected)
      }

      describe('when input is "**\\n*."', () => {
        const input = '**\n' +
                      '*.'
        const testCharAt = createCharAtTest(input)

        it('the cell at 0,0 is live', () => testCharAt('0,0', '*'))
        it('the cell at 0,1 is live', () => testCharAt('0,1', '*'))
        it('the cell at 1,1 is live', () => testCharAt('1,1', '*'))
      })

      describe('when input is "*.\\n**"', () => {
        const input = '*.\n' +
                      '**'
        const testCharAt = createCharAtTest(input)

        it('the cell at 0,0 is live', () => testCharAt('0,0', '*'))
      })

      describe('when input is ".**\\n.*."', () => {
        const input = '.**\n' +
                      '.*.'
        const testCharAt = createCharAtTest(input)

        it('the cell at 1,1 is live', () => testCharAt('1,1', '*'))
      })
    })

    describe('cell with more than 3 live neighbors dies', () => {
      const input = '.......\n' +
                    '...*...\n' +
                    '.......\n' +
                    '..***..\n' +
                    '..**...'
      const expected = '.......\n' +
                       '.......\n' +
                       '..*.*..\n' +
                       '..*.*..\n' +
                       '..*.*..'
      it('returns expected next genaration', () => testNextGen(input, expected))
    })
  })
})
