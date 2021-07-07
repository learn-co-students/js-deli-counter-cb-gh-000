function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var status = '';
  if (line.length > 0) {
    status = 'The line is currently:';
    for (var i = 0; i < line.length; ++i) {
      status += ` ${i+1}. ${line[i]},`
    }
    status = status.slice(0,-1);
  }
  else {
    status = "The line is currently empty.";
  }
  return status;
}
