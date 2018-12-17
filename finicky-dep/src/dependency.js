class FinickyDependency {
  getResource () {
    throw new Error(
      `You can't do that outside of a production environment. Ah, ah, ahh.`
    )
  }
}

module.exports = FinickyDependency
