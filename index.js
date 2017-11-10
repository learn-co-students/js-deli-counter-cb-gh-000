var takeANumber = (currLine, newCustomer) => {
    currLine.push(newCustomer);
    return 'Welcome, ' + newCustomer + '. You are number ' + currLine.length + ' in line.';
}

var nowServing = currLine => {
    if (currLine.length === 0) {
        return 'There is nobody waiting to be served!';
    } else {
        return 'Currently serving ' + currLine.shift() + '.';
    }
}

var currentLine = currLine => {
    if (currLine.length === 0) {
        return 'The line is currently empty.';
    } else {
        var s = 'The line is currently: ';
        for (var i = 0; i < currLine.length; i++) {
            s = s + (i+1) + '. ' + currLine[i];
            if (i !== currLine.length - 1) {
                s = s + ', ';
            }
        }
    }

    return s;
}
