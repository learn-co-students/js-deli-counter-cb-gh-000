function takeANumber(array, name) {
    array.push(name);
    return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
    if (array.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        let currentlyServing = array.shift(0);
        return `Currently serving ${currentlyServing}.`;
    }
}

function currentLine(array) {
    if (array.length === 0) {
        return "The line is currently empty.";
    } else {
        var lineIsCurrently = []
        for (let i = 0, l = array.length; i < l; i++) {
            lineIsCurrently.push(`${i + 1}. ${array[i]}`);
        }
    }
    return `The line is currently: ${lineIsCurrently.join(", ")}`
}
