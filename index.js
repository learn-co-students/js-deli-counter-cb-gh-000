var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var numbersAndNames = []
    for (let i = 0; i < line.length; i++) {
      numbersAndNames.push(`${i+1}. ${line[i]}`);
    }
    return `The line is currently: ${numbersAndNames.join(', ')}`
  }


}
