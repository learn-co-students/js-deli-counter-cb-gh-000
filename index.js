var katzDeli = [];

function takeANumber(lineOfPeople, newPerson) {
  lineOfPeople.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(lineOfPeople) {
  if (lineOfPeople.length > 0) {
    return `Currently serving ${lineOfPeople.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (!line.length) {return "The line is currently empty."}

  const numbersAndNames = []
  for(let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${1 + i}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}
