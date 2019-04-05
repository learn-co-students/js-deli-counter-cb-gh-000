function takeANumber(line,newPerson){
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}
function nowServing(line){
  return (line.length>0)?`Currently serving ${line.shift()}.`:"There is nobody waiting to be served!";
}
function currentLine(line){
  var length=line.length;
  if(length>0){
    var line_str=''
    console.log(line);
    console.log(length);
    for(var i = 0; i<length; i++){
      console.log(i);
      line_str+=(i==0)?`The line is currently: ${i+1}. ${line[i]}`:`, ${i+1}. ${line[i]}`;
    }
    return line_str;
  }else{
    return "The line is currently empty."
  }
}
