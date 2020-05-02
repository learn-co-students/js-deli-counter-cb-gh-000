function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (arr) {
  if (arr.length > 0) {
    var name = arr[0]
    arr.shift();
    return `Currently serving ${name}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line) {
  var statement = `The line is currently: 1. ${line[0]}`
  for (let n = 1; n < line.length; n++) {
    var statement = `${statement}, ${n+1}. ${line[n]}`
  }
  if (line.length > 0) {
    return statement
  } else {
    return "The line is currently empty."
  }
}
