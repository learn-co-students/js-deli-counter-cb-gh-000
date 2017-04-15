function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  var line = [...katzDeliLine];
  var message = "The line is currently: ";
  if (line.length == 0) {
    return "The line is currently empty."
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    message += `${i+1}. ${katzDeliLine[i]}${katzDeliLine.length-1 == i ? '' : ','} `
  }
  return message
}
