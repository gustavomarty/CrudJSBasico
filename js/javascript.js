var data = [
    {
        "id": 1,
        "nome": "Marty",
        "email": "email@teste.com",
        "telefone": "41 999999999"
    },
    {
        "id": 2,
        "nome": "Joao",
        "email": "joao@teste.com",
        "telefone": "41 888888888"
    },
    {
        "id": 3,
        "nome": "Maria",
        "email": "maria@teste.com",
        "telefone": "41 988889999"
    }
];


$(document).ready(function(){
    listarPessoas();
})

function cadastrar()
{
    var nome = $('#txtNome').val();
    
    $('#resultado').html('o nome e ' + nome);

    //var nome = $('#iddomeucamponome').

}



function listarPessoas()
{
    data.forEach(item => {
        var newRow = $("<tr>");		   
        var cols = "";		
        cols += '<td>' + item.id + '</td>';		    
        cols += '<td>' + item.nome + '</td>';		    
        cols += '<td>' + item.email + '</td>';	
        cols += '<td>' + item.telefone + '</td>';	
        cols += '<td>';		    
        cols += '<button onclick="RemoveTableRow(this)" type="button">Remover</button>';		    
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

function addPessoa()
{

}