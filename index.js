function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`;
}
