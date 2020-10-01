const { generateConfig } = require('gatsby-plugin-ts-config');

const config = generateConfig({
  configDir: '.gatsby'
});

module.exports = config;
