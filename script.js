// A list of all the coding challenges I've solved with my solutions

// Get the mean of an array 8kyu
function getAverage(marks) {
	let total = 0;
	marks.forEach(num => {
		total += num;
	});
	return Math.floor(total / marks.length);
}

// Elevator Distance 7kyu
const elevatorDistance = array => {
	let totalFloors = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i + 1] > array[i]) {
			totalFloors += array[i + 1] - array[i];
		} else if (array[i + 1] < array[i]) {
			totalFloors += array[i] - array[i + 1];
		}
	}
	return totalFloors;
};

// Catergorize New Member 7kyu
const openOrSenior = data => {
	let members = [];
	data.forEach(person => {
		person[0] >= 55 && person[1] > 7
			? members.push('Senior')
			: members.push('Open');
	});
	return members;
};

// Printer Errors 7kyu
const printerError = s => {
	const goodColors = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm'
	];
	let badCounter = 0;
	for (let i = 0; i < s.length; i++) {
		if (!goodColors.includes(s[i])) {
			badCounter++;
		}
	}
	return `${badCounter}/${s.length}`;
};

// Sum of 2 lowest possible integers 7kyu
function sumTwoSmallestNumbers(numbers) {
	let newNumbers = 0;
	for (let i = 0; i < 2; i++) {
		newNumbers += Math.min(...numbers);
		let indexOfLowNum = numbers.indexOf(Math.min(...numbers));
		numbers.splice(indexOfLowNum, 1);
	}
	return newNumbers;
}

// Array.dif 6kyu
const arrayDiff = (a, b) => {
	return a.filter(num => !b.includes(num));
};

// Sum of Digits / Digital Root 6kyu
function numbersToArray(number) {
	return number
		.toString()
		.split('')
		.map(num => parseInt(num));
}

function digital_root(n) {
	let numsArray = numbersToArray(n);
	let total = numsArray.reduce(
		(firstValue, secondValue) => firstValue + secondValue
	);
	for (let i = 0; i < numsArray.length; i++) {
		total = numbersToArray(total).reduce(
			(firstValue, secondValue) => firstValue + secondValue
		);
		if (numbersToArray(total).length === 1) {
			return total;
		}
	}
}

// Friend or Foe? 7kyu
const friend = friends => {
	return friends.filter(name => name.length === 4);
};

// Number to Objects 6kyu
const numObj = s => {
	return s.map(num => {
		let value = String.fromCharCode(num);
		let key = num.toString();
		return { [key]: value };
	});
};

const numObj = s => {
	return s.map(num => {
		return { [num]: String.fromCharCode(num) };
	});
};

// If you can read this.. 6kyu
function to_nato(words) {
	let i,
		j,
		a = words.toUpperCase().split(' ').join('').split('');
	for (i = 0; i < a.length; i++) {
		switch (a[i]) {
			case 'A':
				a[i] = 'Alfa';
				break;
			case 'B':
				a[i] = 'Bravo';
				break;
			case 'C':
				a[i] = 'Charlie';
				break;
			case 'D':
				a[i] = 'Delta';
				break;
			case 'E':
				a[i] = 'Echo';
				break;
			case 'F':
				a[i] = 'Foxtrot';
				break;
			case 'G':
				a[i] = 'Golf';
				break;
			case 'H':
				a[i] = 'Hotel';
				break;
			case 'I':
				a[i] = 'India';
				break;
			case 'J':
				a[i] = 'Juliett';
				break;
			case 'K':
				a[i] = 'Kilo';
				break;
			case 'L':
				a[i] = 'Lima';
				break;
			case 'M':
				a[i] = 'Mike';
				break;
			case 'N':
				a[i] = 'November';
				break;
			case 'O':
				a[i] = 'Oscar';
				break;
			case 'P':
				a[i] = 'Papa';
				break;
			case 'Q':
				a[i] = 'Quebec';
				break;
			case 'R':
				a[i] = 'Romeo';
				break;
			case 'S':
				a[i] = 'Sierra';
				break;
			case 'T':
				a[i] = 'Tango';
				break;
			case 'U':
				a[i] = 'Uniform';
				break;
			case 'V':
				a[i] = 'Victor';
				break;
			case 'W':
				a[i] = 'Whiskey';
				break;
			case 'X':
				a[i] = 'Xray';
				break;
			case 'Y':
				a[i] = 'Yankee';
				break;
			case 'X':
				a[i] = 'Zulu';
		}
	}
	return a.join(' ');
}

// Count characters in your string 6kyu
const count = string => {
	const obj = {};
	string.split('').forEach(letter => {
		if (obj[letter] != undefined) {
			obj[letter]++;
		} else {
			obj[letter] = 1;
			console.log(obj);
		}
	});
	return obj;
};

// Format a string of names like 'Bart, Lisa & Maggie'. 6kyu
const list = names => {
	let finalNames = '';
	if (names.length === 1) {
		return names[0].name;
	} else if (names.length === 2) {
		return names[0].name + ' & ' + names[1].name;
	} else {
		names.forEach(n => {
			let name = n.name;
			if (names.indexOf(n) === names.length - 1) {
				finalNames += name;
			} else if (names.indexOf(n) === names.length - 2) {
				finalNames += name + ' & ';
			} else {
				finalNames += name + ', ';
			}
		});
	}
	return finalNames;
};

// Replace with alphabet position 6kyu
function alphabetPosition(text) {
	let alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	let stringSplit = text.toLowerCase().split('');
	let finalString = [];

	for (let i = 0; i < stringSplit.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (alphabet[j] === stringSplit[i]) {
				finalString.push(j + 1);
			}
		}
	}
	return finalString.join(' ');
}

// Who likes it? 6kyu
function likes(names) {
	let totalNames = '';
	let length = names.length;
	if (length === 0) {
		return 'no one likes this';
	}
	for (let i = 0; i < length; i++) {
		if (length > 3) {
			if (i === 0) {
				totalNames += names[i];
			} else if (i === 1) {
				totalNames += ', ' + names[i];
			}
		} else if (length === 2) {
			if (i === 0) {
				totalNames += names[i];
			} else {
				totalNames += ` and ${names[i]} like this`;
			}
		} else if (length === 1) {
			totalNames += `${names[i]} likes this`;
		} else {
			if (i === 0) {
				totalNames += names[i];
			} else if (i === 1) {
				totalNames += ', ' + names[i];
			} else {
				totalNames += ` and ${names[i]} like this`;
			}
		}
	}
	if (names.length > 3) {
		totalNames += ` and ${names.length - 2} others like this`;
	}
	return totalNames;
}

// Count the divisor of a number 7kyu
function getDivisorsCnt(n) {
	let counter = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i == 0) {
			counter++;
		}
	}
	return counter;
}

// Reverse words 7kyu
function reverseWords(str) {
	let newer;
	let newArray = str.split(' ');
	let reversed = '';

	newArray.forEach(word => {
		newer = word.split('');
		newer = newer.reverse();
		reversed += newer.join('');
		if (str.length > reversed.length) {
			reversed += ' ';
		}
		console.log(reversed);
	});
	return reversed;
}

// Detect Panagram 6kyu
const isPangram = string => {
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	const stringLowerCased = string.toLowerCase();
	let counter = 0;
	alphabet.forEach(letter => {
		if (stringLowerCased.includes(letter)) {
			counter++;
		}
	});
	return counter === 26 ? true : false;
};

// Highest Rank Number in an Array 6kyu
const highestRank = arr => {
	const obj = {};
	arr.forEach(num => {
		if (obj[num] === undefined) {
			obj[num] = 1;
		} else {
			obj[num]++;
		}
	});
	const keys = Object.keys(obj);
	const values = Object.values(obj);
	return Number(keys[values.lastIndexOf(Math.max(...values))]);
};

// Who is the killer? 7kyu
const killer = (suspectInfo, dead) => {
	for (const killer in suspectInfo) {
		const theKiller = dead.every(victim =>
			suspectInfo[killer].includes(victim)
		);
		if (theKiller) {
			return killer;
		}
	}
};

// Multi-tap Keypad Text Entry on an Old Mobile Phone 6kyu
const presses = phrase => {
	const obj = {
		1: '1',
		2: 'ABC2',
		3: 'DEF3',
		4: 'GHI4',
		5: 'JKL5',
		6: 'MNO6',
		7: 'PQRS7',
		8: 'TUV8',
		9: 'WXYZ9',
		0: ' 0'
	};
	let counter = 0;
	phrase = phrase.toUpperCase();
	for (let i = 0; i < phrase.length; i++) {
		for (const key in obj) {
			if (obj[key].includes(phrase[i])) {
				counter += obj[key].indexOf(phrase[i]) + 1;
			}
		}
	}
	return counter;
};

// Bouncing Balls 6kyu
const bouncingBall = (h, bounce, window) => {
	let counter = 0;
	let ballRebound = h * bounce;
	if (h > 0 && 1 > bounce && bounce > 0 && window < h) {
		counter++;
		while (ballRebound > window) {
			counter += 2;
			ballRebound *= bounce;
		}
		return counter;
	} else {
		return -1;
	}
};

// The Vowel Code 6kyu
const encode = string => {
	return string
		.split('')
		.map(letter => {
			switch (letter) {
				case 'a':
					return (letter = 1);
				case 'e':
					return (letter = 2);
				case 'i':
					return (letter = 3);
				case 'o':
					return (letter = 4);
				case 'u':
					return (letter = 5);
				default:
					return letter;
			}
		})
		.join('');
};

const decode = string => {
	return string
		.split('')
		.map(letter => {
			switch (letter) {
				case '1':
					return (letter = 'a');
				case '2':
					return (letter = 'e');
				case '3':
					return (letter = 'i');
				case '4':
					return (letter = 'o');
				case '5':
					return (letter = 'u');
				default:
					return letter;
			}
		})
		.join('');
};

// Count letters in string 6kyu
const letterCount = s => {
	const obj = {};
	[...s].forEach(letter => {
		if (obj.hasOwnProperty([letter])) {
			obj[letter] += 1;
			return;
		}
		obj[letter] = 1;
	});
	return obj;
};

// Reverse every other word in the string 6kyu
function reverse(str) {
	const strArr = str.split(' ');
	for (let i = 0; i < strArr.length; i++) {
		if (i % 2 !== 0) {
			strArr[i] = strArr[i].split('').reverse().join('');
		}
	}
	return strArr.join(' ').trim();
}
