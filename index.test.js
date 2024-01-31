import {uppercaseMaker} from './index.js'
import {reverseMaker} from './index.js'
import {calculator} from './index.js'
import {ceasarCipher} from './index.js'
import { analyzeArray } from './index.js';

test('word is capitalized', () => {
    expect (uppercaseMaker('uppercase')).toBe('Uppercase')
});

test('reverses word', () => {
    expect (reverseMaker('uppercase')).toBe('esacreppu')
})

test('calculates', () => {
    expect (calculator.addObj(2, 3)).toEqual(5)
})

test('Encrypts Ceasars message', () => {
    expect (ceasarCipher('encrypted message', 10)).toBe('oxmbizdon wocckqo')
})

test ('analyzes an array with numbers', () => {
    expect (analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6})
})