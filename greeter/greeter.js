function createGreeter (date) {
  const hour = date ? date.getHours() : 12 // say hello if no date

  const formatName = name => name[0].toUpperCase() + name.slice(1)

  const salutation = hour => {
    if (hour >= 22 || hour < 6) return 'Good night'
    if (hour >= 18) return 'Good evening'
    return hour < 12 ? 'Good morning' : 'Hello'
  }

  const greet = name => {
    return `${salutation(hour)}, ${formatName(name.trim())}`
  }

  return { greet }
}

module.exports = { createGreeter }
