const SimpleCiphers = {

    val_encrypt: (text, val) => {
        const letters = text.split('');

        let enc_text = '';

        for (letter in letters){
            enc_text += letter.charCodeAt(0).toString(val);
        }
        return enc_text;
    },

};

module.exports = SimpleCiphers;