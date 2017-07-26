function calcDiscr(a, b, c) {
    return (b*b) - (4 * a * c);
}

function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a, b, c);
    if (discr < 0) {
        return 'no roots'
    }else(a > 0)   
    return [x1 = (-b - Math.sqrt(calcDiscr(a, b, c)))/(2*a), x2 = (-b + Math.sqrt(calcDiscr(a, b, c)))/(2*a)];
    } 


var a = parseFloat(prompt('Enter A'));
var b = parseFloat(prompt('Enter B'));
var c = parseFloat(prompt('Enter C'));

var result = solveQuadratic(a, b, c);

document.write('x1, x2 = ' + result);