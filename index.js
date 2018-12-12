let katzDeliLine = [];
function takeANumber(arr, name) {
  if (!arr.length) {
    arr.push(name);
    return `Welcome, ${name}. You are number 1 in line.`;
  }
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
  if (arr.length) {
    let beingServed = arr.shift();
    return `Currently serving ${beingServed}.`;
  }
  return 'There is nobody waiting to be served!';
}
function currentLine(arr) {
  let lineInfo = 'The line is currently:';
  if (arr.length) {
  for (let i = 0; i < arr.length; i++) {
    lineInfo += ` ${arr.indexOf(arr[i])+1}. ${arr[i]}${arr.indexOf(arr[i])+1 !== arr.length ? ',' : ''}`;
  }
    return lineInfo;
  }
  return "The line is currently empty.";
}
