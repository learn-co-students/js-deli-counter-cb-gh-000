function takeANumber(katzDeliLine,name){

if (katzDeliLine.length!=0)
katzDeliLine.push(name);
else
  katzDeliLine.push(name);
  
for(var i = 0;i<katzDeliLine.length;i++)
if(name ==katzDeliLine[i])
return `Welcome, ${name}. You are number ${i+1} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length ==0)
  return "There is nobody waiting to be served!";
    katzDeliLine.shift();
  return 'Currently serving Steven.';

}

function currentLine(katzDeliLine){
  if (katzDeliLine.length ==0)
  return "The line is currently empty.";
  var line='The line is currently: ';
  for(var i = 0;i<katzDeliLine.length;i++){
    if(i==katzDeliLine.length-1){
  line+=(i+1 +'. ' +katzDeliLine[i] );
  break;
}
  
    line+=(i+1 +'. ' +katzDeliLine[i] +', ' );
  
  }
    return line;
  
}

