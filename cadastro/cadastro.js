"user strict";

// seleciona os campos dos formulários

let c = (el) => document.querySelector(el);

let formulario = c('form');
let nome =c('#txtNome');
let dataN = c('#txtDate');
let numTel = c('#txtTel');
let email = c('#txtEmail');
let nomeVaga = c('#txtVaga');

// Programação de evento do formulário

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    let dados = {
        nome: nome.value,
        data:dataN.value,
        telefone: numTel.value,
        email: email.value,
        vagas:nomeVaga.selectedOptions[0].textContent
    }


    fetch(" http://localhost:3000/candidatos",{
        method: "POST", 
        body:JSON.stringify(dados),
        headers:{"content-type":"application/json"}
    })
    .then(resposta => resposta.json())
    .then(()=> alert("dados cadastrados!"));
    
});



