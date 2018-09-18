let katzDeliLine = [];

var takeANumber = (line, name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

var nowServing = line => {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

var currentLine = line => {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    let out = 'The line is currently: ';
    for (let x = 0; x < line.length; x++) {
      out += `${x + 1}. ${line[x]}${x === line.length - 1 ? '' : ', '}`;
    }
    return out
  }
}
