function calcDiscr(a, b, c) {
    return (b * b) - (4 * a * c);
}
function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a, b, c);
    if (discr < 0){
        result = 'No roots'
        result1 = 'No roots';
        return result;
        return result1;
    }else if(discr > 0)
    result = x1 = (-b - Math.sqrt(calcDiscr(a, b, c)))/(2*a);
    result1 = x2 = (-b + Math.sqrt(calcDiscr(a, b, c)))/(2*a);
    return result;
    return result1;
    if (discr === 0){
        return x1,x2 = (-b) / (2*a);
    }
}
var a = parseFloat(prompt('Enter A'));
var b = parseFloat(prompt('Enter B'));
var c = parseFloat(prompt('Enter C'));

var result = solveQuadratic(a, b, c);
document.write('x1= ' + result);
document.write(' x2 = ' + result1);