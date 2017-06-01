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
