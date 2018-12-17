const FinickyDependency = require('./dependency')

function getResourceFromDependency (resourceApp = new FinickyDependency()) {
  return resourceApp.getResource()
}

module.exports = { getResourceFromDependency }
