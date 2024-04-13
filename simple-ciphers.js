const SimpleCiphers = {

    bin_encrypt: (text) => {
        let enc_text = text.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0')
        }).join('')
        return enc_text;
    },

    bin_decrypt: (enc_text) => {
        let dec_text = enc_text.match(/.{1,8}/g).map(bin => {
            return String.fromCharCode(parseInt(bin, 2))
        }).join('')
        return dec_text;
    },

    caesar_encrypt: (text, step) => {
        let caesar_text = '';
        for (t in text) {
            caesar_text += String.fromCharCode(text.charCodeAt(t) + step);
        }
        return caesar_text;
    },

    caesar_decrypt: (caesar_text, step) => {
        let dec_text = '';
        for (t in caesar_text) {
            dec_text += String.fromCharCode(caesar_text.charCodeAt(t) - step);
        }
        return dec_text;
    },

    morseAlphabet: {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
        '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.',
        ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
        '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
    },

    morse_encrypt: (text) => {
        let morse = text.toUpperCase().split('').map(t => {
            return SimpleCiphers.morseAlphabet[t];
        }).join(' ')
        return morse;
    },

    morse_decrypt: (morse) => {
        let dec_text = morse.split(' ').map(t => {
            return Object.keys(SimpleCiphers.morseAlphabet).find(key => SimpleCiphers.morseAlphabet[key] === t)
            }).join('');
        return dec_text;
    },

};

module.exports = SimpleCiphers;