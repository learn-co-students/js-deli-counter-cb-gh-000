
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0 ) {
    let lineList = [];
    let lineListString = ``
    line.forEach ((element, index) => {
      lineList.push(`${index + 1}. ${element}`)
    });
    lineListString = lineList.join(", ")
    return `The line is currently: ${lineListString}`;
  }
  else {
    return `The line is currently empty.`
  }
 
}
