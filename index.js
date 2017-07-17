function takeANumber(katzDeliLine,name){
  var str = "Welcome, "+ name +". You are number " + (katzDeliLine.length +1) +" in line."
  katzDeliLine.push(name);
  return str;
}
function nowServing(deliLine){
  if(deliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var str  = deliLine[0];
    deliLine.shift();
    
    return "Currently serving "+ str +".";
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }
  else{
    var str;
    var moreStr="";
      line.forEach(function(val,index){
        str = (index+1) +". "+ val;
        if(index == line.length-1){
          moreStr = moreStr+ str+" ";
        }
        else{
          moreStr = moreStr+ str+", ";
        }
        //moreStr = moreStr+ str+", ";
      });
      return "The line is currently: "+ moreStr;
  }
}