var katzDeli = [];

function takeANumber(array, name) {
  array.push(name);
  var numInLine = array.indexOf(name) + 1 ;
  return "Welcome, " + name + "." + " You are number " + numInLine + " in line."
}
takeANumber(katzDeli, "Ada");

function nowServing(array) {
  
  if (!array.length) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + array.shift() + ".";
  }
   //array.shift();
}
nowServing(katzDeli);

function currentLine(array) {
  //var numbers
  //var names = [];
  //names = array.push();

  if (!array.length) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < array.length; i++) {
      return "The line is currently: " + "1. " + array[0] + "," "2. " + array[1] +  "," "3. " + array[2];
    }

  


  
}
