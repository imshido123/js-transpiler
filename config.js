const dateSettings = {
  timeZone: 'America/Chicago',
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short'
}

const config = {
  entry: '.\\source\\',
  output: '.\\output\\',
  options: {
    filterFile: '*.js'
  },
  files: process.argv.slice(2),
  buildInfo: `//BuildDate:: ${new Date().toLocaleString('en-US', dateSettings)}`
}

module.exports = config
