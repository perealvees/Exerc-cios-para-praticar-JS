/*  Exercícios:
    - criar um função que mostre o nome;
    - criar um função que mostre o nome + Sobrenome concactenado;
    - criar um função que mostre o nome, sobrenome, idad e email;
    - criar um função que mostre o nome, sobrenome, idad e email, mas todas letras em maiúsculo;

    Podemos mostrar os resultados na tela de 3 formas:
    alert(nome) 
    document.write(nome) 
    console.log(nome) */

function nome () {
    let nome = 'Maria'
}

function nomeSobre(){
    let nome = 'João'
    let Sobrenome = 'Silva'
    console.log(nome+' '+Sobrenome)
}



function dados (){
    let nome = 'Pedro'
    let sobrenome = 'Sampaio'
    let idade = 14
    let email = 'exemplo2023@email.com'
    
    console.log("Nome: " +nome)
    console.log("Sobrenome: "+sobrenome)
    console.log("Idade: " +idade)
    console.log("Email: " +email)
}

function dadosEmMaiusculo (){
    let nome = 'Pedro'
    let sobrenome = 'Sampaio'
    let idade = 14
    let email = 'exemplo2023@email.com'

    console.log("Nome: " +nome.toUpperCase())
    console.log("Sobrenome: "+sobrenome.toUpperCase())
    console.log("Idade: " +idade)
    console.log("Email: " +email.toUpperCase())
}

nome()
nomeSobre();
dados();
dadosEmMaiusculo();