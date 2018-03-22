var katzDeli = [];

function takeANumber(line, name) {
  let linePosition = line.length + 1;

  line.push(name);

  return `Welcome, ${name}. You are number ${linePosition} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  var currentlyServing = line[0];
  line.shift();

  return `Currently serving ${currentlyServing}.`;
}

function currentLine(line) {
  let lineLength = line.length;

  if (lineLength === 0) {
    return 'The line is currently empty.';
  }

  let string = `The line is currently: 1. ${line[0]}`;
  let count = 1;

  while (count < lineLength) {
    string += `, ${count + 1}. ${line[count]}`;
    count++;
  }

  return string;
}
