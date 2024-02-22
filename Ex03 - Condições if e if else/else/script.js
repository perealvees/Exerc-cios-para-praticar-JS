/*- Crie uma função TEMPERATURA que: 
  Se a pessoa estiver com mais de 37,5
  apareça uma mensagem de "Esta com febre", caso contrário, mostre "Saudável"  
  Depois crie outra fazendo a mesma coisa, mas adicionando um terceiro valor
  dizendo "Temperatura muito baixa"

  - Crie um script com duas variáveis, IDADE E GÊNERO
    o resultado deve dizer se a pessoa é do genero Feminino ou Masculino e
    se a pessoa é adolecente ou adulta.

 - Crie um script com uma variavel numérica usando o if else if, onde a pessoa tem que
  colocar um número de 0 a 5 e você te que retornar esse número por extenso 

 - Repita o exercício anterio mas no lugar do if use o switch case    

*/

function temp (){
    var temp = Number.parseFloat(32.5)

    if(temp >= 37.5){
        console.log(`Você esta com  ${temp}. Esta com febre!`)
    } else{
        console.log(`Sua temperatura é de ${temp}. Você esta saudável!`)
    }
}

function temp2 (){
    var temp2 = Number.parseFloat(36.4)
    
    if( temp2 >= 37.5){
        document.write(`Você esta com ${temp2}. Você esta com febre!`)
    } else if (temp2 <= 35.5 ) {
        document.write(`Você esta com a temperatura de ${temp2}. Esta com hiportemia!`)
    } else {
        document.write(`Sua temperatura esta entre 35.5 e 37.5. Essa na temperatura adequada!`)
    }
    
}

function idadeGenero(){
    var genero = 'Masculino'
    var idade = 23

    if(genero == 'Feminino'){
        if (idade < 18) {
            console.log('Você é uma jovem menor de 18 anos')
        } else {
            console.log('Você ja é uma mulher adulta')
        } 
    } else if (genero == 'Masculino') {
        if (idade < 18) {
            console.log('Você é um jovem menor de 18 anos')
        } else {
            console.log('Você ja é um homem adulto')
        } 

    }
}    

function numeroExtenso(){

    
    var numero =  prompt('Digite um número de 1 a 5: ')
    
    
    if (numero == 1){
        alert(`Você digitou o número ${numero}. Em extenso fica "UM".`)
    } else if (numero == 2) {
        alert(`Você digitou o número ${numero}. Em extenso fica "DOIS".`)
    } else if (numero == 3) {
        alert(`Você digitou o número ${numero}. Em extenso fica "TRÊS".`)
    } else if (numero == 4) {
        alert(`Você digitou o número ${numero}. Em extenso fica "QUATRO".`)
    } else if (numero == 5) {
        alert(`Você digitou o número ${numero}. Em extenso fica "CINCO".`)
    } else {
        alert('Digite um valor de 1 a 5.')
    }


}

function numExtSwitch(){
    let numero = 5
    
    switch (numero){
        case 1:
        alert(`Você digitou o número ${numero}. Em extenso fica "UM".`)
            break;

        case 2:
        alert(`Você digitou o número ${numero}. Em extenso fica "DOIS".`)    
            break;

        case 3:
        alert(`Você digitou o número ${numero}. Em extenso fica "TRÊS".`)    
            break;

        case 4:

        alert(`Você digitou o número ${numero}. Em extenso fica "QUATRO".`)    
            break;

        case 5: 
        alert(`Você digitou o número ${numero}. Em extenso fica "CINCO".`) 
            break;
        
        default:
            alert('Numero errado. Digite um número de 1 a 5')    

    } 

}

//temp();
//temp2();
// idadeGenero();
//numeroExtenso();
numExtSwitch();