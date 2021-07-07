function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  var firstPerson = katzDeliLine[0]
  katzDeliLine.shift()
  return "Currently serving " + firstPerson + "."
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  var peopleInLine = "The line is currently: "
  for (let i = 0; i < katzDeliLine.length - 1; i++) {
    peopleInLine += `${i + 1}. ${katzDeliLine[i]}, `
  }
  return peopleInLine += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`
}
