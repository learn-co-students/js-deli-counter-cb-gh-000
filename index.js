function takeANumber(queue,name){
  queue.push(name)

  return `Welcome, ${ name }. You are number ${queue.length} in line.`;
}

function nowServing(queue){

  if (queue.length <= 0){
    return "There is nobody waiting to be served!"
  }else{
    let message = `Currently serving ${queue[0]}.`
    queue.shift()
    return message;
  }
}

function currentLine(queue){
  if (queue.length === 0){
    return "The line is currently empty.";
  }else{
    var message = "The line is currently: ";
    let lastPerson = queue.length - 1;
    for (let i = 0; i < queue.length; i++){
      if (i == lastPerson){
        var person = `${i + 1}. ${queue[i]}`
        message += person;
      }else{
        var person = `${i + 1}. ${queue[i]}, `
        message += person;

      }
    }
    return message;
  }
}
