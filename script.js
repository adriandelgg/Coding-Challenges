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
    return a.filter(num => !b.includes(num) );
}