function createGreeter (date = new Date(), logger = console) {
  const hours = date.getHours()

  const greeting = () => {
    if (hours >= 22 || hours < 6) return 'Good night'
    if (hours >= 18) return 'Good evening'
    if (hours >= 12) return 'Hello'
    return 'Good morning'
  }

  function greet (name) {
    const trimmedName = name.trim()
    const capitalizedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1)
    const message = `${greeting()}, ${capitalizedName}`
    logger.log(message)
    return message
  }

  return { greet }
}

module.exports = { createGreeter }
