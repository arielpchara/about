const boxen = require('boxen')
const { green } = require('chalk')
const {writeFileSync } = require('fs')

const WIDTH = 50

const data = [
  ['Name','Ariel Pchara'],
  ['E-mail','ariel@pxra.me'],
  ['Github', 'https://github.com/arielpchara']
]

const boxConfig =  {padding: 1, margin: 1, borderStyle: 'classic', borderColor: 'green'}

function toLineString(line) {
  const space = line.reduce( (num, v) => num - v.length, WIDTH )
  return green([ line[0], ...Array(space).fill('.'), line[1] ].join(''))
}

writeFileSync('./card',boxen(data.map(toLineString).join('\n'), boxConfig))