const capitalize = 'uppercase'

const uppercaseMaker = (word) => {
    
    return (word.charAt(0).toUpperCase() + word.slice(1))
}

(uppercaseMaker(capitalize))

const reverseMaker = (word) => {
    const reversedWord = word.split('')
    reversedWord.reverse()
    const finalWord = reversedWord.join('')
    return finalWord
}

reverseMaker(capitalize)

const calculator = {addObj: (a, b) => {return a + b},
subtractObj: (a, b) => {return a - b},
multiplyObj: (a, b) => {return a * b},
}

const ceasarCipher = (word, cypher) => {
    // make to finish this function just use the code from reversemaker to deal with individual letters
    let encryptedWord = []

    const wordSplit = word.split('')
    const wordJoin = encryptedWord.join('')

    const key = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10:'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z'
    }

    const encrypt = (letter) => {
                for (const entry in key) {
                {   
                let test = Number(entry)
                
                if (letter === ' ')
                {return encryptedWord.push(' ')}

                else if (letter === key[entry] && test + cypher > 26)
                {
                    return encryptedWord.push(key[test + cypher - 26])
                }
                else if (letter === key[entry])
                {console.log(letter + ' CHANGED TO ' + key[test + cypher])
                return encryptedWord.push(key[test + cypher])}
            }
        }
    }

    wordSplit.forEach(element => {
        encrypt(element.toLowerCase())
        return element
    });

    console.log(encryptedWord.join(''))
    return encryptedWord.join('')
}

ceasarCipher('encrypted message', 10)


export  {uppercaseMaker, reverseMaker, calculator, ceasarCipher};

// export default uppercaseMaker;
// export default reverseMaker;
//calculator.addObj()