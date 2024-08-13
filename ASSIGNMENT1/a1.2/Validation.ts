
// this code is combination of research in stackoverflow and applying knowledge -jassim

function isValidISBN10(isbn: string): boolean {
    // Regex format to remove any non numeric
    const sanitizedISBN = isbn.replace(/[^0-9X]/gi, '');
    
    // Check length
    if (sanitizedISBN.length !== 10) {
        return false;
    }
    
    // Initialize sum
    let sum = 0;
    
    // Loop through each character and calculate the sum
    for (let i = 0; i < 10; i++) {
        const char = sanitizedISBN[i];
        let value: number;
        
        if (char === 'X') {
            value = 10;
        } else {
            value = parseInt(char, 10);
            
            // Ensure the character is a valid digit
            if (isNaN(value)) {
                return false;
            }
        }
        
        sum += value * (i + 1);
    }
    
    // Check if sum modulo 11 is zero
    return (sum % 11 === 0);
}

// Test examples
console.log(isValidISBN10('1112223339'));  // true
console.log(isValidISBN10('111222333'));   // false
console.log(isValidISBN10('1112223339X')); // false
console.log(isValidISBN10('1234554321'));  // true
console.log(isValidISBN10('1234512345'));  // false
console.log(isValidISBN10('048665088X'));  // true
console.log(isValidISBN10('X123456788'));  // false
 