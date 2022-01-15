import boxen from 'boxen'
import chalk from 'chalk'
import { writeFileSync } from 'fs'

const WIDTH = 50

const data = [
  ['Name','Ariel Pchara'],
  ['Instagram','@arielpchara'],
  ['E-mail','ariel@pchara.com'],
  ['Github', 'https://github.com/arielpchara']
]

function toLineString(line) {
  const space = line.reduce( (num, v) => num - v.length, WIDTH )
  return chalk.green([ line[0], ...Array(space).fill('.'), line[1] ].join(''))
}
const infoBox = boxen(data.map(toLineString).join('\n'), {padding: 1, borderStyle: 'round', borderColor: 'greenBright'})
const dangerBox = boxen(chalk.red('          THIS IS DANGER! - Never do it again!          '), {borderStyle: 'arrow', borderColor: 'redBright'})
const card = `
${infoBox}
${dangerBox}
`

writeFileSync('./card', card)