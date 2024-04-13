# SimpleCiphers

A convenient library for encrypting strings with simple encryption methods

## Installation
```console
$ npm install simple-ciphers
```

## Connecting the library

```js
const ciphers = require('simple-ciphers');

let someText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
```

## Using (encryption)

```js
binText = ciphers.bin_encrypt(someText);

caesarText = ciphers.caesar_encrypt(someText, 7);

morseText = ciphers.morse_encrypt(someText)
```

## Using (decryption)

```js
textBin = ciphers.bin_decrypt(binText);

textCaesar = ciphers.caesar_decrypt(caesarText, 7);

textMorse = ciphers.morse_decrypt(morseText)
```

Of course, you can use several ciphers sequentially. For example, first encrypt the text using the Caesar cipher, then turn it into a binary representation, and only then into Morse code, such a cipher will be more difficult to crack.

## People

#### Author is VadoSVad

## License 

#### MIT