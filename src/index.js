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

    let newstr = ''
    let arr=[]
    
    for (i = 0; i<expr.length; i = i + 10) 
    {
        arr = arr.concat(expr.substring(i,i + 10))
    }
    arr = arr.map(i=>i.slice(i.indexOf(1)))
    arr = arr.map(str => str.replaceAll('10','.')).map(str => str.replaceAll('11','-')) 

    for (i=0; i<arr.length; i++) {
        if (arr[i]=='*') {
            newstr +=' '
        } else {
            newstr += MORSE_TABLE[arr[i]]
        }
        
    }
    return newstr
}

module.exports = {
    decode
}