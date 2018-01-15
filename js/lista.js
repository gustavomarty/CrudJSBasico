$(document).ready(function(){
    listarPessoas();
})

function listarPessoas()
{
    $("#tableItens").html('');

    data.pessoas.forEach(item => {
        var newRow = $("<tr>");		   
        var cols = "";		
        cols += '<td>' + item.id + '</td>';		    
        cols += '<td>' + item.nome + '</td>';		    
        cols += '<td>' + item.email + '</td>';	
        cols += '<td>' + item.telefone + '</td>';	
        cols += '<td>';		    
        cols += '<button onclick="AlterarPessoa(\'' + item.id + '\');" type="button" class="btn btn-success">Editar</button>';		    
        cols += '</td>';	        	
        cols += '<td>';		    
        cols += '<button onclick="RemoverPessoa(\'' + item.id + '\');" type="button" class="btn btn-danger">Remover</button>';		    
        cols += '</td>';	
        newRow.append(cols);
        $("#tableItens").append(newRow);     
    });
}

function RemoverPessoa(id) {
    data.removerPessoa(id);
    listarPessoas();
  };


function AlterarPessoa(id)
{
    window.location = 'cadastro.html?id='+ id;
}

function novo()
{
    window.location = 'cadastro.html';
}