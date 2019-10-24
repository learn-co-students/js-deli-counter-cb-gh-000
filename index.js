function takeANumber(line, name){
    console.log(line);
  line.push(name);
  return  `Welcome, ${name}. ` + `You are number ${line.indexOf(name) + 1} in line.`

}

function nowServing(line){
  if(line.length === 0){
    return `There is nobody waiting to be served!`
  } else {
  return  `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  let theFinalLine = [];
  if(line.length === 0){
    return `The line is currently empty.`
  } else {
    for(let i = 0; i < line.length; i++){
      theFinalLine.push(` ${i+1}. ${line[i]}`);
    }
    console.log(theFinalLine);
  }
  return `The line is currently:${theFinalLine}`
}
