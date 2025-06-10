# Unit Test with Jest — Currency Converter

This is a coding exercise from [4Geeks Academy](https://4geeks.com/syllabus/miami-81/project/unit-test-with-jest) focused on writing and testing JavaScript functions using the Jest testing framework.

## Project Goal

Build a simple app that converts currency values and write unit tests to validate each conversion function.

## Supported Conversions

- From Euro to US Dollar
- From US Dollar to Japanese Yen
- From Japanese Yen to British Pound

All rates are based on 1 Euro using this lookup object:

```js
let oneEuroIs = {
  JPY: 156.5,
  USD: 1.07,
  GBP: 0.87,
};
```

## Tech Stack

- JavaScript (ES6)
- Node.js
- Jest

## File Structure

```
.
├── app.js         # Main file with conversion functions
├── test.js        # Jest test file
├── package.json   # Project setup and scripts
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the tests:

```bash
npm run test
```

## Notes

- This project is a fork of the original [4Geeks Academy repository](https://github.com/breatheco-de/exercise-unit-test-with-jest).
- Make sure to push your changes to your own fork before submitting.

Project Page: [https://4geeks.com/syllabus/miami-81/project/unit-test-with-jest](https://4geeks.com/syllabus/miami-81/project/unit-test-with-jest)
