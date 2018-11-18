/* eslint func-names: off, prefer-arrow-callback: off */
const { expect } = require('chai')
const makeFields = require('./mine-sweeper.js')

describe('makeFields', () => {
  it('is a function', () => {
    expect(makeFields).to.be.a('function')
  })

  it('returns a string', () => {
    const input = formatFieldStr(`
      1 1
      .
      0 0`)
    const actual = makeFields(input)
    expect(actual).to.be.a('string')
  })

  function formatFieldStr (str) {
    const firstLine = /\n */
    const leftPaddingOfAllLines = /^ +/gm
    return str.replace(firstLine, '').replace(leftPaddingOfAllLines, '')
  }

  describe('when passed invalid argument', () => {
    it('throws when first row does not contain two integers', () => {
      const input = formatFieldStr(`
        *..
        ...
        0 0`)
      throwsDimensionsError(() => makeFields(input))
    })

    function throwsDimensionsError (shouldThrow) {
      const expectedMsg = 'Missing field dimensions or dimensions not valid.'
      expect(shouldThrow).throws(expectedMsg)
    }

    it('throws when field dimensions are inaccurate', () => {
      const input = formatFieldStr(`
        2 3
        *..
        ...
        ***
        0 0`)
      throwsDimensionsError(() => makeFields(input))
    })

    it('throws when lines dimension is < 1', () => {
      const input = formatFieldStr(`
        0 3
        *..
        ...
        0 0`)
      throwsDimensionsError(() => makeFields(input))
    })

    it('throws when lines dimension is > 100', () => {
      const input = formatFieldStr(`
        101 3
        *..
        ...
        0 0`)
      throwsDimensionsError(() => makeFields(input))
    })

    it('throws when columns dimension is < 1', () => {
      const input = formatFieldStr(`
        2 0
        *..
        ...
        0 0`)
      throwsDimensionsError(() => makeFields(input))
    })

    it('throws when columns dimension is > 100', () => {
      const input = formatFieldStr(`
        2 101
        *..
        ...
        0 0`)
      throwsDimensionsError(() => makeFields(input))
    })

    it('throws when missing end of input line "0 0"', () => {
      const input = formatFieldStr(`
      1 3
      *..
      ...`)
      const shouldThrow = () => makeFields(input)
      const expectedMsg = 'Missing end of input. ("0 0")'
      expect(shouldThrow).throws(expectedMsg)
    })
  })

  describe('when input string contains a single field', () => {
    describe('when the field has one column', () => {
      it('returns: Field #1:\\n0', () => {
        const input = formatFieldStr(`
        1 1
        .
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n0')
      })

      it('returns: Field #1:\\n*', () => {
        const input = formatFieldStr(`
        1 1
        *
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n*')
      })

      it('returns: Field #1:\\n0\\n0', () => {
        const input = formatFieldStr(`
        2 1
        .
        .
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n0\n0')
      })

      it('returns: Field #1:\\n*\\n1', () => {
        const input = formatFieldStr(`
        2 1
        *
        .
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n*\n1')
      })

      it('returns: Field #1:\\n1\\n*', () => {
        const input = formatFieldStr(`
        2 1
        .
        *
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n1\n*')
      })

      it('returns: Field #1:\\n0\\n1\\n*', () => {
        const input = formatFieldStr(`
        3 1
        .
        .
        *
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n0\n1\n*')
      })
    })

    describe('when the field has one row', () => {
      it('returns: Field #1:\\n00', () => {
        const input = formatFieldStr(`
        1 2
        ..
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n00')
      })

      it('returns: Field #1:\\n*1', () => {
        const input = formatFieldStr(`
        1 2
        *.
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n*1')
      })

      it('returns: Field #1:\\n1*', () => {
        const input = formatFieldStr(`
        1 2
        .*
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n1*')
      })
    })

    describe('when the field dimensions are 2 x 2', () => {
      it('returns: Field #1:\\n11\\n1*', () => {
        const input = formatFieldStr(`
        2 2
        ..
        .*
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n11\n1*')
      })

      it('returns: Field #1:\\n11\\n*1', () => {
        const input = formatFieldStr(`
        2 2
        ..
        *.
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n11\n*1')
      })

      it('returns: Field #1:\\n1*\\n11', () => {
        const input = formatFieldStr(`
        2 2
        .*
        ..
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n1*\n11')
      })

      it('returns: Field #1:\\n*1\\n11', () => {
        const input = formatFieldStr(`
        2 2
        *.
        ..
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n*1\n11')
      })
    })

    describe('when the field dimensions are 4 x 4', () => {
      it('returns: Field #1:\\n*100\\n2210\\n1*10\\n1110', () => {
        const input = formatFieldStr(`
        4 4
        *...
        ....
        .*..
        ....
        0 0`)
        const actual = makeFields(input)
        expect(actual).to.equal('Field #1:\n*100\n2210\n1*10\n1110')
      })
    })
  })

  describe('when input string contains more than one field', () => {
    it('returns: Field #1:\\n000\\n\\nField #2:\\n*10', () => {
      const input = formatFieldStr(`
      1 3
      ...
      1 3
      *..
      0 0`)
      const actual = makeFields(input)
      const expected = 'Field #1:\n000\n\nField #2:\n*10'
      expect(actual).to.equal(expected)
    })
    it('acceptance test', () => {
      const input = formatFieldStr(`
      4 4
      *...
      ....
      .*..
      ....
      3 5
      **...
      .....
      .*...
      0 0`)
      const actual = makeFields(input)
      const expected = 'Field #1:\n*100\n2210\n1*10\n1110\n\n' +
        'Field #2:\n**100\n33200\n1*100'
      expect(actual).to.equal(expected)
    })
  })
})
