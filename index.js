function takeANumber(line, name){
  line.push(name);
  var position = line.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${position} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }else{
    var first = katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  }else{
    var phrase = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i == katzDeliLine.length-1) {
        phrase = phrase.concat(`${i+1}. ${katzDeliLine[i]}`);
      }else{
        phrase = phrase.concat(`${i+1}. ${katzDeliLine[i]}, `);
      }

    }
    return phrase;
  }
}
