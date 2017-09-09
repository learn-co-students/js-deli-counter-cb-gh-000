var katzDeli = []

function takeANumber(ketzDeliLine, name){
  var string = `Welcome, ${name}. You are number ` + (ketzDeliLine.length + 1) + " in line."
  ketzDeliLine.push(name);
  return string
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var string = `Currently serving ` + katzDeliLine.shift() + ".";
    return string
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var string = "The line is currently: ";
    for(let i = 0; i < katzDeliLine.length; i++){
      if((katzDeliLine.length - i) === 1){
        string = string + (i+1) + ". " + katzDeliLine[i];
      } else {
      string = string + (i+1) + ". " + katzDeliLine[i] + ", ";
      }
    }
  }
return string
}
