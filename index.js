katzDeli = [];

function takeANumber(katzDeliLine, newCustomerName) {
  katzDeliLine.push(newCustomerName);
  return `Welcome, ${newCustomerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0)
    return "The line is currently empty.";
  lineStr = "The line is currently:";
  katzDeliLine.forEach(
                        (currentPerson, index, line) => {
                          lineStr += ` ${index+1}. ${currentPerson}`;
                          if(index != line.length-1)
                            lineStr += ",";
                        }
                      );
  return lineStr;
}
