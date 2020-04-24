function takeANumber(people, name){
  people.push(name)
  return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing(people){
  var person = 'foo';
  if(people.length != 0){
    person = people.shift();
    return `Currently serving ${person}.`;
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var str = "The line is currently:"
  if(line.length != 0){
    for(let i = 0 ; i < line.length; i++){
      if(i == line.length - 1){
        str += ` ${i+1}. ${line[i]}`
      }
      else{
      str += ` ${i+1}. ${line[i]},`
    }
    }
  }
  else if(line.length == 0){
    return 'The line is currently empty.'
  }
  return str;
}
