// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8086')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('div')
      .assert.containsText('h3', 'Count is 0')
      .end()
  }
}
