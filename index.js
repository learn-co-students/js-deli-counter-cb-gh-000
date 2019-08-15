function takeANumber(deli, name){
  var r = deli.push(name);
  return "Welcome, " + name + ". You are number " + r + " in line."
}

function nowServing(deli){
  if (deli.length <= 0){
    return "There is nobody waiting to be served!";
  } else {
    var c = deli.shift();
    return "Currently serving " + c + "."
  }
}

function currentLine(line){
  if (line.length <= 0){
    return "The line is currently empty.";
  } else {
    var rv = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      rv += `${i+1}. ${line[i]}`;
      if (i !== line.length-1){
        rv += ", ";
      }
    }
    return rv;
  }
}
