function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var served = line.shift();
  return served == undefined ? 'There is nobody waiting to be served!' : `Currently serving ${served}.`;
}

function currentLine(line) {
  if(line.length == 0) {
    return 'The line is currently empty.';
  } else {
    var currentLine = `The line is currently: 1. ${line[0]}`;
    for(let i = 1; i < line.length; i++) {
      currentLine += `, ${i + 1}. ${line[i]}`
    }
    return currentLine;
  }
}
