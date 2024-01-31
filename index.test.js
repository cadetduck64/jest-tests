import {uppercaseMaker} from './index.js'
import {reverseMaker} from './index.js'
import {calculator} from './index.js'
import {ceasarCipher} from './index.js'

test('word is capitalized', () => {
    expect (uppercaseMaker('uppercase')).toBe('Uppercase')
});

test('reverses word', () => {
    expect (reverseMaker('uppercase')).toBe('esacreppu')
})

test('calculates', () => {
    expect (calculator.addObj(2, 3)).toEqual(5)
})

test('Encrpts Ceasars message', () => {
    expect (ceasarCipher('encrypted message', 10)).toBe('oxmbizdon wocckqo')
})