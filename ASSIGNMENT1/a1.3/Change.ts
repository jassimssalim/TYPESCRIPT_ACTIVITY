//this code build with the help of stackoverflow -jassim

function transformString(input: string): string {
    
    function getNextLetter(char: string): string {
        if (char >= 'a' && char <= 'z') {
            return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        if (char >= 'A' && char <= 'Z') {
            return char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
        return char;
    }

    function adjustCase(char: string): string {
        
        const vowels = 'aeiou';

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


console.log(transformString("Cat30")); 