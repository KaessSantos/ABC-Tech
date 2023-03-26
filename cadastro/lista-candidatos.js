"user strict"


const botao = $("#carregar");
const lista = $('#lista');


botao.on("click", function(){
    // Ajax para acesso a API

    $.ajax({
        url:"http://localhost:3000/candidatos",
        dataType: "json",
        success: function(resposta){
            lista.html("");
            $.each(resposta, function(indice, conteudo){
                lista.append(`<li class="list-group-item">${conteudo.nome} - ${conteudo.vagas}</li>`).hide().fadeIn();
            });
            
        }
    });
    
    
});