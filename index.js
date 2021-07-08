
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var position = katzDeliLine.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ` + katzDeliLine.shift() + `.`;
  }
}

function currentLine(katzDeliLine) {
  var temparr = [];
  if (katzDeliLine[0] === undefined) {
    return 'The line is currently empty.';
  } else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        temparr.push((i + 1)  + '. ' + katzDeliLine[i]);
      }
      return 'The line is currently: ' + temparr.join(', ');
  }
}
