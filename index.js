
function takeANumber(line, name) {
  var i = line.length + 1;
  line.push(name);
  return  'Welcome, ' + name + '. ' + 'You are number ' + i + ' in line.';
}

function nowServing(line) {
  if (line.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
      return 'Currently serving ' + line.shift() + '.';
  }
}

function currentLine(line) {
  if (line.length ==0) {
    return 'The line is currently empty.';
  } else { var i = 0;
      return 'The line is currently: ' + 1 + '. ' + line[i] + ', ' + 2 + '. ' + line[1] + ', ' + 3 + '. ' + line[2];
      }
  }
