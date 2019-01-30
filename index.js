function takeANumber (line,person) {
  var waitingposition = line.length + 1
  line.push(person)
  return "Welcome, "+ person + ". You are number " + waitingposition + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var first = katzDeliLine.shift()
    return "Currently serving " + first + "."
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var string = "The line is currently: 1. " +  katzDeliLine.shift()
    var counter
    for ( counter = 2 ; counter <= katzDeliLine.length + 2; counter ++){
      string = string + ", " + counter + ". " + katzDeliLine.shift()
    }
    return string
  }
}
