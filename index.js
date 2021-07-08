var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var lineSize = katzDeliLine.length;
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  
}

function nowServing(katzDeliLine) {
  var name
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  }

}

function currentLine(katzDeliLine) {
  var currLine = "The line is currently:"
  if(katzDeliLine.length == 0) {
    return "The line is currently empty."
  }

  for (var i = 0; i < katzDeliLine.length-1; i++) {
    currLine += ` ${i+1}. ${katzDeliLine[i]},`
  }

  currLine += ` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
  
  return currLine;
}