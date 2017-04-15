function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
  return "There is nobody waiting to be served!"
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
