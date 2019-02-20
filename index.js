function takeANumber(line, name){
    let waitingPosition = line.length + 1;
    line.push(name);
    return `Welcome, ${name}. You are number ${waitingPosition} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var firstPerson = katzDeliLine.shift();
    return "Currently serving " + firstPerson + ".";
  }
}

function currentLine(line){
  if(line.length == 0){
  return "The line is currently empty.";

  }
  else{
    var string = "The line is currently: 1. " + line.shift();
    var counter;
    for(counter = 2; counter <= line.length + 2; counter++){
      string = string + ", " + counter + ". " + line.shift();
    }
    return string;
  }
}
