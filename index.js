function takeANumber(currentLine,name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length>0) {
    return "Currently serving "+currentLine.shift()+"."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length>0) {
    var out="The line is currently: "
    for (let i=0;i<line.length;i++) {
      if (i===line.length-1) {
        out+=`${i+1}. ${line[i]}`
      }
      else {
        out+=`${i+1}. ${line[i]}, `
      }
    }
    return out;
  }
  else {
    return "The line is currently empty."
  }
}
