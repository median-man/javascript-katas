const formatName = name => {
  name = name.trim()
  return name[0].toUpperCase() + name.slice(1)
}

module.exports = class Greeter {
  constructor (date) {
    this.date = date
  }

  greet (name) {
    if (!this.date) return `Hello, ${formatName(name)}`

    const hour = this.date.getHours()
    if (hour < 12) return `Good morning, ${formatName(name)}`
    if (hour < 18) return `Hello, ${formatName(name)}`
    return `Good evening, ${formatName(name)}`
  }
}
