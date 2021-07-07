function takeANumber(katzDeliLine, nname) {
  katzDeliLine.push(nname);
  return `Welcome, ` + nname + `. You are number ` + katzDeliLine.length + ` in line.`;
}

function nowServing(katzDeliLine) {
  let a = katzDeliLine[0];
  katzDeliLine.shift();
  if (a) {
    return `Currently serving ` + a + `.`;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine) {
  let line = [];
  if (katzDeliLine[0]) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      line[i] = i + 1 + '. ' + katzDeliLine[i];
    }
  } else {
    return 'The line is currently empty.';
  }
  return 'The line is currently: ' + line.join(`, `);
}
