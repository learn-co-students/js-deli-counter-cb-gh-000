function takeANumber(tab, name) {
  tab.push(name);
  return `Welcome, ${name}. You are number ${tab.length} in line.`;
}
function nowServing(tab) {
  if(tab.length == 0)
  {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${tab.shift()}.`;
}
function currentLine(tab) {
  if(tab.length == 0)
  {
    return 'The line is currently empty.'
  }
  var string = "The line is currently:"
  for(var i = 0; i < tab.length; ++i)
  {
    string = string + ` ${i+1}. ${tab[i]}`
    if((i+1)< tab.length)
    {
      string += ','
    }
  }
  return string;
}
