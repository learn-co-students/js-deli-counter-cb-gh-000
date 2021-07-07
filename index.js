function takeANumber(currentCustomer, newCustomer){
  currentCustomer.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${currentCustomer.length} in line.`;
}

function nowServing(currentCustomer){
  if(currentCustomer.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${currentCustomer.shift()}.`;
  }
}

function currentLine(line){
  var j;
  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    var i = "The line is currently:"
    for(j=1; j < line.length ; j++){
      i = i + " " + j + ". " + line[j-1] + ",";
    }
    i = i + " " + j + ". " + line[j-1];
    return i;
  }
}
