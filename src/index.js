const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let decodedString = '';
    let morseArray = '';
    
    for (let j = 0; j < expr.length; (j += 10)) {
        morseArray = '';
    for (let i = 0; i < 10; i+= 2) {
        if (expr.substr(i+j,2) === '10') {
            morseArray = morseArray + '.';
        }
        else if (expr.substr(i+j,2) === '11') {
            morseArray = morseArray + '-';
        }
        else if (expr.substr(i+j,2) === '**') {
            morseArray = morseArray + ' ';
            break;
        }
        else if (expr.substr(i+j,2) === '00')
        continue; 
    }

    if (morseArray == ' ') {
        decodedString = decodedString + ' ';
    }
    else 
    decodedString = decodedString + MORSE_TABLE[morseArray];
}
    return decodedString;
}

module.exports = {
    decode
}