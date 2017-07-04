function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`;
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  var result = "";
  if (katzDeliLine.length > 0) {
    result += "The line is currently:";
    for (var i = 0; i < katzDeliLine.length; i++) {
      result += ` ${i+1}. ${katzDeliLine[i]}`;
      result += (i+1 < katzDeliLine.length ? "," : "");
    }
  }
  else {
    result = "The line is currently empty.";
  }
  return result;
}
