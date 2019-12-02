#!/usr/bin/env node

'use strict'

const { readFileSync } = require('fs')
const {resolve} = require('path')

console.log(readFileSync(resolve(__dirname, '../card')).toString())