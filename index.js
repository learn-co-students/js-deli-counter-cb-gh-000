var katzDeliLine = [];
function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person)
  var position = katzDeliLine.indexOf(person)+1
  return "Welcome, "+person+". You are number "+position+" in line."
}
function nowServing(arr){
  if(arr.length){
    arr.shift()
    return "Currently serving Steven."
  }
  return "There is nobody waiting to be served!"
}
function currentLine(arr){
  if(arr.length){
    var str = "The line is currently: ";
    var position=1
    while(position<=arr.length){
      if(arr[position]===undefined)
      str+=position+". "+arr[position-1];
      else
      str+=position+". "+arr[position-1]+", ";
      position++
    }
    return str
  }
  return "The line is currently empty."
}
