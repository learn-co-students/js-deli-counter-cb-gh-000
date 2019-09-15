const katzDeli = [];

function takeANumber(katzDeliLine, newCustomer){
    katzDeliLine.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 1){
  let firstInQueue = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstInQueue}.`
  } else{
  return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine, customer){
  let currentLineString = 'The line is currently: '
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  for(let i = 0; i < katzDeliLine.length; i++){
    if(i===0){
    currentLineString += `${i+1}. ${katzDeliLine[i]}`
  }else{
    currentLineString += `, ${i+1}. ${katzDeliLine[i]}`
    }
  }
  return currentLineString;
}
