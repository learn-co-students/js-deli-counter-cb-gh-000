function takeANumber(line, member) {
  var position = line.length;
  line.push(member);

  return `Welcome, ${member}. You are number ${position + 1} in line.`;
}

function currentLine(line) {
  var status = '';
  if (line.length == 0)
    status = 'The line is currently empty.';
  else {
    status = "The line is currently: ";
    for (let i = 0; i < line.length; i++) {
      status += `${i + 1}. ${line[i]}`;
      status += (i == line.length - 1) ? '' : ', ';
    }
  }
  return status;
}

function nowServing(line) {
  var msg = '';
  if (line.length == 0)
    msg = 'There is nobody waiting to be served!';
  else {
    var serving = line.shift(1);
    msg = `Currently serving ${serving}.`;
  }
  return msg;
}
