//this code build with the help of stackoverflow -jassim
function transformString(input) {
    function getNextLetter(char) {
        if (char >= 'a' && char <= 'z') {
            return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        if (char >= 'A' && char <= 'Z') {
            return char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        return char;
    }
    function adjustCase(char) {
        var vowels = 'aeiou';
        if (vowels.includes(char.toLowerCase())) {
            return char.toUpperCase();
        }
        return char.toLowerCase();
    }
    // Transform the string
    return input
        .split('')
        .map(getNextLetter)
        .map(adjustCase)
        .join('');
}
// Example usage
console.log(transformString("Cat30")); // Output: "dbU30"
