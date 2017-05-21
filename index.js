const takeANumber = (deli, client) => {
  deli.push(client)
  return `Welcome, ${client}. You are number ${deli.length} in line.`
}

const deliToString = (deli) => {
  let deliLineText = deli.reduce((acc, val, index, arr) =>  {
    if (index === arr.length - 1) {
      return `${acc}${index + 1}. ${val}`
    } else {
      return `${acc}${index + 1}. ${val}, `
    }
  }, '')

  return deliLineText
}

const currentLine = (deli) => {
  return `The line is currently${deli.length > 0 ? ': ' + deliToString(deli) : ' empty.'}`
}

const nowServing = (deli) => {
  const servedClient = deli.shift()
  return deli.length > 0 ? `Currently serving ${servedClient}.`
                          : 'There is nobody waiting to be served!'
}
