
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
