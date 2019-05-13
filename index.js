
function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array){
  if(array.length > 0){
    return `Currently serving ${array.shift()}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array){
  if(array.length > 0){ 
    return array.reduce( (initial, current, index) =>{
      var temp = initial + ` ${index + 1}. ${current}` 
      if(index != array.length - 1)
        temp = temp + ",";
      return temp;
    }
      , "The line is currently:"   )
  }else{
    return "The line is currently empty."
  }
}