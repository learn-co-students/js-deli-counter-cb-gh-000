function takeANumber(ar, name) {
  ar.push(name);
  return `Welcome, ${name}. You are number ${ar.length} in line.`
}

function nowServing(ar){
  if (ar.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${ar.shift()}.`
  }
}

function currentLine(ar) {
  if (ar.length === 0) {
    return "The line is currently empty.";
  } else {
    var res = "The line is currently:";
    for (var i = 0; i < ar.length; i++) {
      if (i === ar.length - 1){
        res = res + ` ${i+1}. ${ar[i]}`;
      } else {
        res = res + ` ${i+1}. ${ar[i]},`;
      }
    }
    return res;
  }
}
