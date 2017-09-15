function takeANumber(line, name) {
	line.push(name);
	return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function currentLine(line) {
	if (line.length > 0) {
		var string = "The line is currently: ";
		for (let i = 0; i < line.length; i++) {
			string += `${i + 1}. ${line[i]}, `;
		}
		return string.slice(0, string.length - 2);
	} else {
		return "The line is currently empty."
	}

}

function nowServing(line) {
	if (line.length > 0) {
		var name = line.shift();
		return `Currently serving ${name}.`;
	} else {
		return "There is nobody waiting to be served!"
	}

}
