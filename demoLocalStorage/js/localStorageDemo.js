var listaDeObjetos; //Variável global para armazenar os dados


$(document).ready(function(){
    carregarGrid();             //Método carregarGrid() é chamado aqui pois necessita do HTML já gerado
});

inicializar();

function inicializar(teste)
{
    var dataLocalStorage = localStorage.getItem("martyData");   //buscar no local storage se para a chave "martyData" existe alguma coisa
    
    if(dataLocalStorage != null) //Verificar de existe algo no local storage na chave buscada 
    {
        this.listaDeObjetos = JSON.parse(dataLocalStorage);     //Caso exista, seta na variavel global que armazenará os dados
        console.log('lista global atualizada conforme localstorage -> ' + JSON.stringify(this.listaDeObjetos));
    }
    else
    {
        this.listaDeObjetos = new Array();                      //Caso não existe, inicializa a variavel global com um array empty
        console.log('lista global recebe um array zerado pois o localstorage está sem nada');
    }
}

function refreshLocalStorage()  //Método que irá fazer a atualização do localstorage quando a lista for manipulada
{
    localStorage.setItem("martyData", JSON.stringify(this.listaDeObjetos));  //Atualiza o localstorage com nossa variável global com todos os itens
    console.log('localstorage atualizado com a lista global pois sofreu alguma alteração');
}

function inserirObjeto()
{
    var objeto = {
        id: guid(),
        cor: "verde",
        tamanho: 100,
        data: new Date()
    };
    console.log('novo objeto criado -> ' + JSON.stringify(objeto));

    this.listaDeObjetos.push(objeto);     
    refreshLocalStorage();
    carregarGrid();
}

function removerObjeto(id)
{
    console.log('vai remover objeto com ID -> ' + id);
    var index = this.listaDeObjetos.findIndex(obj => obj.id == id);
    this.listaDeObjetos.splice(index, 1 );
    refreshLocalStorage();
    carregarGrid();
}

function carregarGrid()
{
    console.log('vai carregar a grid');

    $("#tableItens").html(''); //Efetua a limpeza da grid

    this.listaDeObjetos.forEach(item => {
        var newRow = $("<tr>");		   
        var cols = "";		
        cols += '<td>' + item.id + '</td>';		    
        cols += '<td>' + item.cor + '</td>';		    
        cols += '<td>' + item.tamanho + '</td>';	
        cols += '<td>' + item.data + '</td>';	
        cols += '<td>';		    
        cols += '<button onclick="removerObjeto(\'' + item.id + '\');" type="button" class="btn btn-danger">Remover</button>';		    
        cols += '</td>';	
        newRow.append(cols);
        
        $("#tableItens").append(newRow);     
    });
}

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }