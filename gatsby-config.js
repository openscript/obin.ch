const { generateConfig } = require('gatsby-plugin-ts-config')

module.exports = generateConfig({
  tsNode: true,
  configDir: '.gatsby'
})
