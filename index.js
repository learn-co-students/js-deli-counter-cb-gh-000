var katzDeli = [];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number "+ (katzDeliLine.indexOf(name)+1) + " in line.");
}
function nowServing(name) {
  var temp = name[0];
  if(temp) {
    name.shift();
    return ("Currently serving " + temp +".");
  }
  else {return "There is nobody waiting to be served!"}
}
function currentLine(line) {
  var temp = "The line is currently: ";
  if(line.length) {
    for(var i=0;i < line.length;i++) {
        if(i<line.length-1){
          temp = temp + (i+1) + ". " + line[i] + ", ";
        }
        else {temp = temp + (i+1) + ". " + line[i];}
    }
    return temp;
  }
  else {return "The line is currently empty.";}
  
}