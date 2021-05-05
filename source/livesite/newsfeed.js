var finalResponse = {
    buildInfo: `${new Date().toLocaleString('en-US', dateSettings)}`
  }
  Object.assign(finalResponse, body)