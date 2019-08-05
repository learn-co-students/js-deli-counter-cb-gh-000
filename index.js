function takeANumber(array,name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.` ;
}

function nowServing(array){
  var name;
  if (array.length == 0)
    return "There is nobody waiting to be served!"
  else {
    name = array[0];
    array.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(array){
  var returnValue;
  if (array.length == 0)
    returnValue = "The line is currently empty."
  else {
    returnValue = "The line is currently: "
    for (let i = 0; i < array.length ;i++){
      returnValue += (i+1) + ". " + array[i]
      if (i != array.length - 1)
        returnValue += ", "
    }
  }
  return returnValue
}
