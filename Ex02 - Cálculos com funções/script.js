/* Exercícios
    - criar 2 variáveis númericas e fazer em cada linha:
    > o resultado da soma, subtração, multiplicação, divisão inteira e resto de divisão
*/
function soma(){ // soma
    var num1 = 15
    var num2 = 20
    
    var res = `A soma de ${num1} e ${num2} é: ${num1 + num2}`;
    console.log(res)
}


function subtração(){ // soma
    var num1 = 59
    var num2 = 20
    
    var res = `A subtração de ${num1} e ${num2} é: ${num1 - num2}`;
    console.log(res)
}

function multiplicação(){ // soma
    var num1 = 5
    var num2 = 2
    
    var res = `A multiplicação de ${num1} e ${num2} é: ${num1 * num2}`;
    console.log(res)
}

function divisãoInt(){ // soma
    var num1 = 20
    var num2 = 4
    
    var res = `A divisão inteira de ${num1} e ${num2} é: ${num1 % num2}`;
    console.log(res)
}

function divisãoResto(){ // soma
    var num1 = 10
    var num2 = 3
    
    var res = `O resto da divisão de ${num1} por ${num2} é: ${num1 / num2}`;
    console.log(res)
}


soma();
subtração();
multiplicação();
divisãoInt();
divisãoResto();

