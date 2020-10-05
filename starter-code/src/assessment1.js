// Write a function that returns the product of 2 numbers
function product(x, y) {
    return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else {
        return b
    }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
    if (a > b) {
        return a;
    }
    if (b > a) {
        return b
    }
    if (c > a && c > b) {
        return c
    }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let suma = 0;
    numbers.forEach(function(numero) {
        suma += numero;
    });
    return suma;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
    var maxValue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        var currentValue = numbers[i];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    return maxValue;
}

// Return the longest string in an array
function longestString(strings) {
    var count = strings[0];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > count.length) {
            count = strings[i];
        }
    }
    return count;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
    if (wordsArr.includes(word)) {
        return true;
    } else {
        return false;
    }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
    //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
    //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
    //
}