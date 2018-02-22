var katzDeli = [];
function takeANumber(katzDeli, name){
      while (katzDeli.length > 0){
       katzDeli.push(name);
       return ('Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.')
    }}
function nowServing(katzDeli){
     if(katzDeli.length===0) { //checks if length of array(katzDeli) is = to 0
     return 'There is nobody waiting to be served!'; //returns string no one is waiting
  }
     var customer = katzDeli.shift(); // shift array of people
     return "Currently serving " + customer + ".";
   } //return string with customer name
function currentLine(katzDeliLine){
    if (katzDeliLine.length===0) {
    return "The line is currently empty.";
  }
     var customerAndNumber = [];
     for (var i=0; i<katzDeliLine.length; i++) {
     customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
  }
    return "The line is currently: " + customerAndNumber.join(", ");
  }
