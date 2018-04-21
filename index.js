var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name +". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(line){
  if (line.length < 1){
    return "There is nobody waiting to be served!";
  }
    return "Currently serving " + line.shift()+".";
}

function currentLine(line){
  if (line.length < 1){
    return "The line is currently empty.";
  }
  for (let i = 0; i < line.length; i++){
    katzDeli.push((i + 1)+ '. '+ line[i]);
  }
  return "The line is currently: " + katzDeli.join(', ');
}
