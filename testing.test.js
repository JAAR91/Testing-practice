import myCalculator, {stringLength, reverseString, capitalize} from './testing.js';

test('return character count', () => {
    expect(stringLength('test')).toBe(4);
});

test('return character count', () => {
    expect(stringLength('test')).not.toBe(7);
});

test('take a string as an argument and return it reversed', () => {
    expect(reverseString('1234')).toBe('4321');
});

test('take a string as an argument and return it reversed', () => {
    expect(reverseString('1234')).not.toBe('1234');
});

describe('calculator class', () => {

    test('return the sum of 2 numbers', () => {
        expect(myCalculator.add(3,2)).toBe(5);
    });

    test('return the sum of 2 numbers', () => {
        expect(myCalculator.add(3,2)).not.toBe(7);
    });

    test('return the sum of 2 numbers', () => {
        expect(myCalculator.add(7,2)).toBe(9);
    });

    test('return the difference of 2 numbers', () => {
        expect(myCalculator.subtract(5,4)).toBe(1);
    });

    test('return the difference of 2 numbers', () => {
        expect(myCalculator.subtract(5,4)).not.toBe(5);
    });

    test('return the difference of 2 numbers', () => {
        expect(myCalculator.subtract(9,4)).toBe(5);
    });

    test('return the division of 2 numbers', () => {
        expect(myCalculator.divide(8,4)).toBe(2);
    });

    test('return the division of 2 numbers', () => {
        expect(myCalculator.divide(8,5)).not.toBe(6);
    });

    test('return the division of 2 numbers', () => {
        expect(myCalculator.divide(20,5)).toBe(4);
    });

    test('return the miltiplication of 2 numbers', () => {
        expect(myCalculator.multiply(2,2)).toBe(4);
    });

    test('return the miltiplication of 2 numbers', () => {
        expect(myCalculator.multiply(2,5)).not.toBe(17);
    });

    test('return the miltiplication of 2 numbers', () => {
        expect(myCalculator.multiply(2,10)).toBe(20);
    });
});

test('return a string with the first letter capitalize', () => {
    expect(capitalize('aaBBB')).toBe('Aabbb');
});

test('return a string with the first letter capitalize', () => {
    expect(capitalize('JOSE')).toBe('Jose');
});

test('return a string with the first letter capitalize', () => {
    expect(capitalize('jose')).toBe('Jose');
});
