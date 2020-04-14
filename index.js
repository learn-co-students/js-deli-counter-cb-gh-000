
function takeANumber(Line, newName){
  Line.push(newName);
  let length=Line.length;
  return `Welcome, ${newName}. You are number ${length} in line.`;
}

function nowServing(Line){
  if( typeof Line == 'undefined' ){
  return `There is nobody waiting to be served!`;

  }
  else if(Line.length>0) {

    let Serving = Line[0];
    Line.shift();
    return `Currently serving ${Serving}.`;
  }
  else {
    return `There is nobody waiting to be served!`;
  }
}


function currentLine(Line){
  var value="The line is currently: ";
  var noOne="The line is currently empty."
  if(Line.length>0){
    for(let i=0;i<Line.length-1;i++){

      value+= (i+1) + ". " +Line[i]+", ";

    }
    value+= Line.length + ". " + Line[Line.length-1];
    return value;
  }
  else{
    return noOne;
  }
}
