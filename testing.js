class Calculator {

    add(a, b){
        return a + b;
    }
    
    subtract(a,b){
        return a - b;
    }
    
    divide(a,b){
        return a / b;
    }
    
    multiply(a,b){
        return a * b;
    }
}

export function stringLength(string){
    return string.length;
}

export function reverseString(string) {
    return string.split('').reverse().join('');
}

export function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let myCalculator = new Calculator;

export default myCalculator;