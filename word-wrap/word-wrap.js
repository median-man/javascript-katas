function wordWrap (text, columns) {
  if (!text || !columns || columns < 0) return ''

  const textFitsOnOneLine = text.length <= columns
  if (textFitsOnOneLine) return text

  let endLineAt = text.lastIndexOf(' ', columns)
  let nextLineAt = columns
  const hasSpace = endLineAt > -1
  if (hasSpace) {
    nextLineAt = endLineAt + 1
  } else {
    endLineAt = columns
  }
  return `${text.substr(0, endLineAt)}\n${wordWrap(text.substr(nextLineAt), columns)}`
}

module.exports = wordWrap
