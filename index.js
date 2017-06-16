function takeANumber(katzDeliLine, newPerson) {
  var number = katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  var current = katzDeliLine.shift()
  if (current) {
    return `Currently serving ${current}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently:"
  if (katzDeliLine.length >= 1) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += ` ${i+1}. ${katzDeliLine[i]},`
    }
    return line.slice(0,-1)
  } else {
    return "The line is currently empty."
  }
}
