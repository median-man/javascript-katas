const formatName = name => {
  const trimmed = name.trim()
  return trimmed[0].toUpperCase() + trimmed.slice(1)
}

const salutation = hour => {
  if (hour >= 22 || hour < 6) return 'Good night'
  if (hour >= 18) return 'Good evening'
  if (hour >= 12) return 'Hello'
  return 'Good morning'
}

const greet = (name, hour) => {
  return `${salutation(hour)}, ${formatName(name)}`
}

function createGreeter (date = new Date(), logger) {
  const hour = date.getHours()
  return {
    greet: name => {
      const greeting = greet(name, hour)
      if (logger) logger.log(greeting)
      return greeting
    }
  }
}

module.exports = { createGreeter }
