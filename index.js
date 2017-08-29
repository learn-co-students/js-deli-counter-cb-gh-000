var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (let i = 0; i < katzDeliLine.length; i ++) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i+1} in line.`;
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current_temp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current_temp}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var message = "The line is currently: ";
  for (let i = 0; i < katzDeliLine.length; i++) {
    var temp_arr = [`${i+1}. `, katzDeliLine[i]];
    if (i === katzDeliLine.length - 1) {
      message += temp_arr.join("");
    } else {
      message += temp_arr.join("") + ', ';
    }
  }
  return message;
}
