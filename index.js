
function takeANumber(current, name){
  current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(currentLine){
  var str = "The line is currently";
  if (currentLine.length === 0){
    str += " empty."
  }else{
    str += ":"
    for(let i = 0; i < currentLine.length; i++){
      if (i === currentLine.length - 1){
        str += ` ${i+1}. ${currentLine[i]}`
      }else{
        str += ` ${i+1}. ${currentLine[i]},`
      }
    }
  }
  return str;
}