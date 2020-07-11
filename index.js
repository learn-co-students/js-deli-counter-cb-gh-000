function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`
}


function nowServing(katzDelhiLine) {
  if (katzDelhiLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDelhiLine.shift()}.`
  }
}

function currentLine(katzDelhiLine) {
  var string = "";
  if (katzDelhiLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (let i = 0;i < katzDelhiLine.length;i++) {
      if (i === katzDelhiLine.length - 1) {
      string = string + `${i+1}. ${katzDelhiLine[i]}`;
    }
    else {
      string = string + `${i+1}. ${katzDelhiLine[i]}, `;
    }
    }
    return "The line is currently: " + string;
  }
}
