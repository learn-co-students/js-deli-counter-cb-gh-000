function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line){
  if(line < 1){
    return "The line is currently empty."
  }else{
    var announcement = "The line is currently: "
    for(let i = 0; i < line.length; i++){
      announcement += (`${i+1}. ${line[i]}` + (i == line.length-1 ? "" : ", "))
    }
    return announcement
  }
}
