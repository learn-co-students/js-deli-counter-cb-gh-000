function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line.";
}

function nowServing(katzDeliLine){
  return katzDeliLine.length === 0 ? "There is nobody waiting to be served!" : "Currently serving "+katzDeliLine.shift()+".";
}

function currentLine(katzDeliLine){
  var result;
  if(katzDeliLine.length === 0){
    result = 'The line is currently empty.';
  }else{
    result = "The line is currently: ";
    for(let a = 0; a < katzDeliLine.length; a++){
      result += a+1+". "+katzDeliLine[a]+(a+1 === katzDeliLine.length ? "" : ", ");
    }
  }
  return result;
}
