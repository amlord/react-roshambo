## Introduction

First of all, I approached this project by researching **Roshambo**, and playing several versions online.

I then created an [initial mockup](https://www.andrewlord.co.uk/portfolio/roshambo/static/img/roshambo-mockup.png), which gave me an idea of the components that would be needed in the solution.

Once I had this mockup, I was then able to start creating tests, one component at a time, and writing the corresponding code so that the tests passed. At the end of the build for each component, I checked code coverage of the tests to make sure they covered 100% of the code.

After the functionality was complete, I then styled the application.

Given more time, I would look to improve:

- Make the solution fully responsive, so users could play on all devices
- Add animations to slow down the game play, and make it feel more engaging
- Preloading of the FontAwesome font, so we don't get the delay in first icon render
- Cross-browser testing, depending on compatibility requirements
- Add prettier (code formatting module) into build process
- Extend to include 'Lizard' and 'Spock' options
- Assess performance optimisations
- Make available offline as a PWA

## The Working Version

[Roshambo](https://www.andrewlord.co.uk/portfolio/roshambo/)

## Instructions

To install dependencies after downloading, run:
```npm install```

To start the application, run:
```npm start```

To start the test suite, run:
```npm test```

To run the test suite (with code coverage), run:
```npm test -- --coverage```