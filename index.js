function takeANumber(katzDeliLine, name) {
  
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
    
}

function currentLine(katzDeliLine) {
  
  if( katzDeliLine.length === 0 )  {
    
    return "The line is currently empty."
    
  }
  
  else if( katzDeliLine.length === 1 ) {
    
    return `The line is currently: 1. ${katzDeliLine[0]}`
    
  } 
  
  else {
    
    var s = `The line is currently: 1. ${katzDeliLine[0]}`
    for( var i = 1 ; i < katzDeliLine.length; i++) {
      
      s += `, ${i+1}. ${katzDeliLine[i]}`
      
    }
    return s 
    
  }
  
}

function nowServing(katzDeliLine) {
  
  if( katzDeliLine.length === 0) {
    
    return "There is nobody waiting to be served!"
    
  }
  
  else {
    
    var s = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return s 
  }
  
}