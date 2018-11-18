function createGreeter (date, logger) {
  function greet (name) {
    const message = `${greeting()}, ${formatName(name)}`
    logger.log(message)
    return message
  }

  function greeting () {
    const hours = date.getHours()
    if (hours < 6 || hours >= 22) return 'Good night'
    if (hours < 12) return 'Good morning'
    if (hours < 18) return 'Hello'
    return 'Good evening'
  }

  function formatName (name) {
    const trimmed = name.trim()
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
  }

  return { greet }
}

module.exports = { createGreeter }
