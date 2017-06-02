var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];
const deliLine = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, name) {

  katzDeli.push(name)
  var i = katzDeli.length;

  return `Welcome, ${name}. You are number ${i} in line.`;

}

function nowServing(deliline) {
  if(deliline.length > 0) {
    return `Currently serving ${deliline.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeli) {
  if(katzDeli.length === 0) {
    return `The line is currently empty.`
  } else {
    var str = 'The line is currently:'
    for(var i = 0; i < katzDeli.length; i++) {
      str += ` ${i+1}. ${katzDeli[i]},`;
    }
    str = str.substring(0,str.length-1);
  }
  return str;
}

takeANumber(katzDeli, 'Ada')
