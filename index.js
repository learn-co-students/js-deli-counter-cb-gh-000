function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let currentPerson = katzDeliLine[0]
    katzDeliLine.shift()

    return `Currently serving ${currentPerson}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var string = 'The line is currently:'
    for (let i = 0; i < line.length; i++) {
      if (i === 0) {
        string += ` ${i + 1}. ${line[i]}`
      } else {
        string += `, ${i + 1}. ${line[i]}`
      }
    }

    return string
  } else {
    return 'The line is currently empty.'
  }
}
