# Pokedex.net Client

[![Version](https://badge.fury.io/gh/pokedex-net%2Fpokedex-net-client.svg)](https://github.com/pokedex-net/pokedex-net-client)
[![Coverage](https://coveralls.io/repos/github/pokedex-net/pokedex-net-client/badge.svg?branch=master)](https://coveralls.io/github/pokedex-net/pokedex-net-client?branch=master)
[![Documentation](https://pokedex-net.github.io/pokedex-net-client/badge.svg)](https://pokedex-net.github.io/pokedex-net-client/index.html)
[![Build Status](https://circleci.com/gh/pokedex-net/pokedex-net-client.svg?style=svg)](https://circleci.com/gh/pokedex-net/pokedex-net-client)
[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)


### Todo

* Immediate
  1. Miscellaneous
    * Finish writing tests and docs
  2. Layout
    * Light/Dark Theme Switch (Toggle Element, Bottom of Sidebar)
    * Language Select (Simple Dropdown, Bottom of Sidebar)
    * Search Bar (Input & Complex Dropdown, Right Header)
    * Sub Nav
      * Fix so that those that don't fit are hidden behind a plus button and then shown in an expanded view
      * Remove entirely in favor of another subnav concept
      * Remove entirely
    * Responsive Header & Sidebar
    * Meta Tag Clean Up
    * Mobile Testing
  3. Functionality
    * Proper i18n Language support
      * Needs to support Redux, Redux Persist, and RTL
* Later
  * Planning
    * Pokémon indexes/pages
    * Attacks indexes/pages
    * Items indexes/pages
    * Abilities indexes/pages
    * Berries indexes/pages
    * Flesh out tools/info/other areas


## Installation
Note: You should be using Node v10 or higher. Check your Node version with `node -v`.

1. `git clone git@github.com:pokedex-net/pokedex-net-client.git`
2. `cd pokedex-net-client`
3. `npm install`


## Usage

### Development
`npm start`

Development of this application assumes working knowledge of [ES6](http://es6-features.org), [CSS3](https://www.w3schools.com/css/default.asp), [React](https://reactjs.org/), [React Router](https://reacttraining.com/react-router/), [Redux](https://redux.js.org/), [Redux Saga](https://github.com/redux-saga/redux-saga), [styled-jsx](https://github.com/zeit/styled-jsx), [Mocha](https://mochajs.org/), & [Sinon](https://sinonjs.org/).

ENV Var | Default | Description
------- | ------- | -----------
`PORT` | `8080` | The port where the application is served.
`API_HOST` | `//api.pokedex.net/` | The API host address.


### Testing
`npm run test`

To run tests continually: `npm run test:watch`

Running tests will automatically run `npm run lint`, which will check the codebase for linting errors using [ESLint](https://eslint.org/) based loosely off of [Airbnb's Style Guide](https://github.com/airbnb/javascript).


### Documentation
`npm run docs:watch`

Documentation should generally be run in watch mode so that it updates the documentation as you modify code. If you would prefer to run the documentation manually, you can run `npm run docs`.

Documentation makes use of [ESDoc](https://esdoc.org/).


### Production Build
`npm run build`


## License
This software is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
Public License](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode).
