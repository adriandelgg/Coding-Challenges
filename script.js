// A list of all the coding challenges I've solved with my solutions

// Elevator Distance 7kyu
const elevatorDistance = array => {
    let totalFloors = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i+1] > array[i]) {
            totalFloors += array[i+1] - array[i];
        } else if (array[i+1] < array[i]) {
            totalFloors += array[i] - array[i+1];
        } 
    }
    return totalFloors;
}

// Catergorize New Member 7kyu
const openOrSenior = data => {
    let members = [];
    data.forEach(person => {
        person[0] >= 55 && person[1] > 7 ? members.push('Senior') : members.push('Open');  
    });
    return members;
}

// Printer Errors 7kyu
const printerError = s => {
    const goodColors = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
    let badCounter = 0;
    for (let i = 0; i < s.length; i++) {
        if (!goodColors.includes(s[i])) {
            badCounter++;
        }  
    }
    return `${badCounter}/${s.length}`;  
}

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
    return a.filter(num => 
        !b.includes(num) 
    );
}

// Sum of Digits / Digital Root 6kyu
function numbersToArray(number) {
    return number.toString().split('').map(num => parseInt(num) );
}
  
function digital_root(n) {
    let numsArray = numbersToArray(n);
    let total = numsArray.reduce((firstValue, secondValue) =>
        firstValue + secondValue 
    );
    for (let i = 0; i < numsArray.length; i++) {
        total = numbersToArray(total).reduce((firstValue, secondValue) =>
            firstValue + secondValue 
        );
        if (numbersToArray(total).length === 1) {
            return total;
        }
    }
}

// Friend or Foe? 7kyu
const friend = friends => {
    return friends.filter(name => name.length === 4);
}

// Number to Objects 6kyu
const numObj = s => {
    return s.map(num => {
        let value = String.fromCharCode(num);
        let key = num.toString();
        return { [key]: value } 
    });
}

const numObj = s => {
    return s.map(num => { 
        return { [num]: String.fromCharCode(num) }
    });
}

// If you can read this.. 6kyu
function to_nato(words) {
    let i, j, a = words.toUpperCase().split(' ').join('').split('');
    for (i = 0; i < a.length; i++) {
        switch (a[i]) {
        case 'A': a[i] = 'Alfa'; break;
        case 'B': a[i] = 'Bravo'; break;
        case 'C': a[i] = 'Charlie'; break;
        case 'D': a[i] = 'Delta'; break;
        case 'E': a[i] = 'Echo'; break;
        case 'F': a[i] = 'Foxtrot'; break;
        case 'G': a[i] = 'Golf'; break;
        case 'H': a[i] = 'Hotel'; break;
        case 'I': a[i] = 'India'; break;
        case 'J': a[i] = 'Juliett'; break;
        case 'K': a[i] = 'Kilo'; break;
        case 'L': a[i] = 'Lima'; break;
        case 'M': a[i] = 'Mike'; break;
        case 'N': a[i] = 'November'; break;
        case 'O': a[i] = 'Oscar'; break;
        case 'P': a[i] = 'Papa'; break;
        case 'Q': a[i] = 'Quebec'; break;
        case 'R': a[i] = 'Romeo'; break;
        case 'S': a[i] = 'Sierra'; break;
        case 'T': a[i] = 'Tango'; break;
        case 'U': a[i] = 'Uniform'; break;
        case 'V': a[i] = 'Victor'; break;
        case 'W': a[i] = 'Whiskey'; break; 
        case 'X': a[i] = 'Xray'; break;
        case 'Y': a[i] = 'Yankee'; break;
        case 'X': a[i] = 'Zulu'; 
        }          
    }
    return a.join(' ');
}

// Count characters in your string 6kyu
const count = string => {  
    const obj = {};
    string.split('')
        .forEach(letter => {
            if (obj[letter] != undefined) {
                obj[letter]++;
            } else {
                obj[letter] = 1;
                console.log(obj);
            }
        });
    return obj;
}

//
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
}