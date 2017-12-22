$(document).ready(function(){
    listarPessoas();
})

var data = [
    {
        "id": 1,
        "nome": "Marty"
    },
    {
        "id": 2,
        "nome": "Joao"
    },
    {
        "id": 3,
        "nome": "Maria"
    }
];


function listarPessoas()
{
    data.forEach(item => {
        var newRow = $("<tr>");		   
        var cols = "";		
        cols += '<td>' + item.id + '</td>';		    
        cols += '<td>' + item.nome + '</td>';		    
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