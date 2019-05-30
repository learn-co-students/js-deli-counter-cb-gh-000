var katzDeliLine = [];

function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function nowServing(arr) {
  if (arr.length == 0) return "There is nobody waiting to be served!";
  var name = arr.shift();
  return `Currently serving ${name}.`;
}

function currentLine(line) {
  if (line.length == 0) return "The line is currently empty.";
  var ret = "The line is currently: ";
  for (var i = 0; i < line.length - 1; i++) {
    ret = ret + `${i + 1}. ${line[i]}, `;
  }
  ret = ret + `${line.length}. ${line[line.length -1]}`;
  return ret;
}
