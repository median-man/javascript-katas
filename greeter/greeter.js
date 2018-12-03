const formatName = name => {
  name = name.trim()
  return name[0].toUpperCase() + name.slice(1)
}

const salutation = hour => {
  if (hour < 6 || hour >= 22) return 'Good night'
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Hello'
  return 'Good evening'
}

module.exports = class Greeter {
  constructor (date, logger) {
    const defaultHour = 12
    const hour = date ? date.getHours() : defaultHour
    this.salutation = salutation(hour)

    this.logger = logger
  }

  greet (name) {
    const greeting = `${this.salutation}, ${formatName(name)}`;
    if (this.logger) this.logger.log(greeting)
    return greeting
  }
}
