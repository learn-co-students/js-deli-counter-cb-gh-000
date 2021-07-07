var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';

}

function nowServing(katzDeliLine) {
  var person = katzDeliLine[0];
  katzDeliLine.shift([0]);
  if (katzDeliLine.length > 0) {
  return 'Currently serving ' + person + '.';}
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var lineOrder = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  for (var i = 0; i < katzDeliLine.length; i = i+1) {
    var name = katzDeliLine[i];
    lineOrder.push(' ' + (i+1) + '. ' + name);
  }

  return "The line is currently:" + lineOrder;

}
