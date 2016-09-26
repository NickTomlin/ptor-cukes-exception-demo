Example showcasing how cucumber + protractor does not properly handle exceptions.

```
npm i

# this exits premeturely, without running the "successful" spec
npm run test:cucumber

# this runs all specs
npm run test:mocha
```
