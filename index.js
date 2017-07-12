function takeANumber(line, person){
  line.push(person)
  var pos = line.indexOf(person)
  return `Welcome, ${person}. You are number ${pos + 1} in line.`
}

function nowServing(line){
  var msg
  if (line.length > 0){
    var person = line.shift()
    msg = `Currently serving ${person}.`
  }
  else {
    msg = "There is nobody waiting to be served!"
  }

  return msg
}

function currentLine(line){
  var msg
  if (line.length > 0){
    msg = "The line is currently: "
    for (var i = 0; i < line.length; i++){
      msg += `${i + 1}. ${line[i]}`

      if (i + 1 < line.length){
        msg += ", "
      }
    }
  }
  else {
    msg = "The line is currently empty."
  }

  return msg
}