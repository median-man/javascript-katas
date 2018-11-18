const { expect } = require('chai')
const wordWrap = require('./word-wrap.js')

describe('wordWrap', () => {
  it('is a function', () => expect(wordWrap).is.a('function'))
  describe('when the string fits on one line', () => {
    it('returns "hello world" when columns is 11', () => {
      expect(wordWrap('hello world', 11)).to.equal('hello world')
    })

    it('returns "hi" when columns is 2', () => {
      expect(wordWrap('hi', 2)).to.equal('hi')
    })
  })
  describe('when there is only one word in the text', () => {
    it('it adds a new line when columns is less than the length of the text', () => {
      expect(wordWrap('indubitably', 8)).to.equal('indubita\nbly')
    })
  })

  describe('when there are two words in the text', () => {
    it('wordWrap("Hello World", 6) ==> "Hello\\nWorld"', () => {
      expect(wordWrap('Hello World', 6)).to.equal('Hello\nWorld')
    })

    it('wordWrap("aaaaa bb", 4) ==> "aaaa\\na bb"', () => {
      expect(wordWrap('aaaaa bb', 4)).to.equal('aaaa\na bb')
    })

    it('wordWrap("duck duck", 3) ==> "duc\\nk\\nduc\\nk"', () => {
      expect(wordWrap('duck duck', 3)).to.equal('duc\nk\nduc\nk')
    })
  })

  describe('when there are multiple words in the text', () => {
    it('wordWrap("duck duck goose", 4) ==> "duck\\nduck\\ngoos\\ne"', () => {
      expect(wordWrap('duck duck goose', 4)).to.equal('duck\nduck\ngoos\ne')
    })
  })

  describe('edge cases', () => {
    it('wordWrap() ==> ""', () => {
      expect(wordWrap()).to.equal('')
    })

    it('wordWrap("hello") ==> ""', () => {
      expect(wordWrap('hello')).to.equal('')
    })

    it('wordWrap("hello", -1) ==> ""', () => {
      expect(wordWrap('hello', -1)).to.equal('')
    })
  })
})
