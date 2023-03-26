"user strict"


const selectVagas = document.querySelector('#txtVaga');

fetch("http://localhost:3000/vagas")
.then(resposta => resposta.json())
.then(dados => {

    selectVagas.innerHTML = '<option></option>'
    for(let vaga of dados){
        let cargo = document.createElement('option');

        cargo.value = vaga.id;
        cargo.textContent = vaga.titulo;
        
        selectVagas.append(cargo)
    };

})