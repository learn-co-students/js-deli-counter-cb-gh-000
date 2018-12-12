function takeANumber(arr,str) {
  arr.push(str);
  return `Welcome, ${str}. You are number ${arr.length} in line.`
}
function nowServing(arr) {

  if (arr.length==0) {
    return"There is nobody waiting to be served!"
  }
 var name=arr.shift()
 return `Currently serving ${name}.`
}
function currentLine(arr) {
  if(arr.length<1) return "The line is currently empty."
  var answer="The line is currently:"
  for (var i = 0; i < arr.length-1; i++) {
    answer = answer +` ${i+1}. ${arr[i]},`;
  }
  answer =answer + ` ${i+1}. ${arr[i]}`;
  return answer;
}
