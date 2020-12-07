function add(num1, num2){
    const result = num1 + num2;
    return result;
}

let currentResult = add(50, 42);

alert(`The Result is: ${currentResult}`);


function add(num1, num2){
    const result = +num1 + +num2;  // "+" before a variable makes it a number
    let output = parseInt(num1) + parseInt(num2); // both are same parseFloat makes it fractional 
    alert(output);
    return result;
}

let currentResult = add('50', '42');

alert(`The Result is: ${currentResult}`);
