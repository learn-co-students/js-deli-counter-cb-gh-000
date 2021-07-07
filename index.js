var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
      katzDeliLine.push(name);
      return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
/**
* This function should return the first person in line and then remove
that individual from the line. If there is nobody in line,
it should return "There is nobody waiting to be served!"

**/
function nowServing(katzDeliLine) {
    if (katzDeliLine.length = []) {
      return `There is nobody waiting to be served!`;
    }else{
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length = 0) {
    return `The line is currently empty.`
  }
  const new_word = new Array();
  for (var i = 0; i <= katzDeliLine.length; i++) {
      new_word.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${new_word.join(', ')}`
}
