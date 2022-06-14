const appArray = require('./Array')
const jsonArray = require('./json-conv')
const lodash = require('lodash')

const concatedArray = lodash.concat(appArray.arr,jsonArray.numbers)

module.exports = concatedArray