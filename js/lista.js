$(document).ready(function(){
    listarPessoas();
})

function listarPessoas()
{
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
        cols += '<button onclick="RemoveTableRow(this)" type="button" class="btn btn-danger">Remover</button>';		    
        cols += '</td>';	
        newRow.append(cols);
        $("#tableItens").append(newRow);     
    });
}

RemoveTableRow = function(handler) {
    var tr = $(handler).closest('tr');

    tr.fadeOut(400, function(){ 
      tr.remove(); 
    }); 

    return false;
  };


function AlterarPessoa(id)
{
    window.location = 'cadastro.html?id='+ id;
}

function novo()
{
    window.location = 'cadastro.html';
}