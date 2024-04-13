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

    caesar_decrypt: (enc_text, step) => {
        let dec_text = '';
        for (t in enc_text) {
            dec_text += String.fromCharCode(enc_text.charCodeAt(t) - step);
        }
        return dec_text;
    }

};

module.exports = SimpleCiphers;