Quick example of how `unhandledException` listener in Protractor v4 interferes with the one in Cucumber.

To run the example (assuming you have a Selenium server running):
`npm install && npm run -s test`

In Cucumber the magic happens in `cucumber/lib/cucumber/util/run.js`, if you want to take a closer look.