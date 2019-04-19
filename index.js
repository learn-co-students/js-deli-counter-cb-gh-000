function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var name = array[0]
    array.shift()
    return `Currently serving ${name}.`
  }
}
 function currentLine(line){
   if (line.length === 0){
     return "The line is currently empty."
   } else {
     var sentence = "The line is currently: "
     for (var i = 0; i < line.length; i++){
       sentence += `${i+1}. ${line[i]}${i === line.length -1 ? "" : ", "}`
     }
     return sentence
   }
 }
