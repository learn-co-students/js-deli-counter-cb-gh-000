function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0)
    return  "There is nobody waiting to be served!";
  else{
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(currentLine){
  if(currentLine.length === 0)
    return "The line is currently empty.";
  else{
    var line = "The line is currently:";
    for(var i = 0; i<currentLine.length; i++){
      if(i!=0)
        line += ','
      line += ` ${i+1}. ${currentLine[i]}`;
    }
  }


  return line;
}
