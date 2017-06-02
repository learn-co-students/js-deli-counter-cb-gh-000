function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let personBeingServed = katzDeliLine.shift();
    return `Currently serving ${personBeingServed}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  let lineMembersWithNumbers = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
    lineMembersWithNumbers.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${lineMembersWithNumbers.join(", ")}`
}
