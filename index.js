function takeANumber(katzDeliLine,name){
  var n=katzDeliLine.length+1;
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+ n +" in line.";
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length==0){
    return "There is nobody waiting to be served!";
  }
  else{
    var name = katzDeliLine.shift();
    return "Currently serving "+name+".";
  }
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length==0){
    return "The line is currently empty.";
  }
  else{
    var str = "The line is currently: ";
    for(let i=0;i!=katzDeliLine.length;i++){
      let counter=i+1;
      if(i==0){
        str+=counter+". "+katzDeliLine[i];
      }
      else{
        str+=", "+counter+". "+katzDeliLine[i];
      }
    }
  }
  return str;
}
