
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  name = katzDeliLine[0]
  katzDeliLine.shift()
  if (katzDeliLine.length <= 1){
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving "+name+"."
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length <= 1){
    return "The line is currently empty."
  }
  else {
    var myString = "The line is currently: "
    for(var i = 0;i<katzDeliLine.length;i++){
      myString = myString + (i+1) + ". " + katzDeliLine[i]
      if (i < katzDeliLine.length-1)
        myString = myString + ", "
    }
    return myString
  }
}
