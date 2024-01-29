
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

const ceasarCipher = (word, shift) => {
    console.log(a + 2)
}

export  {uppercaseMaker, reverseMaker, calculator};

// export default uppercaseMaker;
// export default reverseMaker;
//calculator.addObj()