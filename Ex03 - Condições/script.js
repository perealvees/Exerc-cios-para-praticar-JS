/* Crie uma função que: 
  se a pessoa estiver com mais de 37,5
  apareça uma mensagem de "Esta com febre", caso contrário, mostre "Saudável"  

  Depois crie outra fazendo a mesma coisa, mas adicionando um terceiro valor
  dizendo "Temperatura muito baixa"
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



//temp();
//temp2();