/*JS Transpiler - v0.2*/
const readdirp = require('readdirp')
const babel = require('@babel/core')
const fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const config = require('./config')

let fileCount = 0
let fileSuccess = 0

const checkFiles = (files, fileName) => {
  if (files.length > 0) {
    for(const file of files) {
      // console.log(`${file} === ${fileName}?`)
      if (file === fileName) {
        return true
      }
    }
    return false
  } else {
    return true
  }
}

const newProcess = async files => {
  await transform(files)
  console.log(`Finished. Files Updated: ${fileSuccess}/${fileCount}`)
}

const transform = async files => {
  for (const file of files) {
    if (checkFiles(config.files, file.basename)) {
      let result = {}
      
      fileCount++
      result = await babel.transformFileAsync(file.relativePath, {})
      await writeFile(`${config.output}${file.path}`, `${config.buildInfo}\n${result.code}`).then(() => fileSuccess++).catch(
        err => {
          console.error('Error: please check the code', err)
        }
      )
    }
  }
  return 0
}

const getPaths = () => {
  let files = []
  readdirp(config.entry, config.options)
    .on('data', entry => {
      const { path, basename } = entry
      const relativePath = `${config.entry}${path}`
      files.push({ relativePath: relativePath, basename: basename, path: path })
    })
    .on('warn', error =>
      console.error('Warning - please check your code', error)
    )
    .on('error', error =>
      console.error('Error - please check your code', error)
    )
    .on('end', () => newProcess(files))
}

/*Kick-off*/
getPaths()
