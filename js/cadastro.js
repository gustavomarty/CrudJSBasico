$(document).ready(function(){
    iniciar();
})

var id = null;

function iniciar()
{
    var url = new URL(window.location.href);
    this.id = url.searchParams.get('id');

    if(this.id != undefined)
    {
        carregarAlteracao(id);
    }
}

function carregarAlteracao(id){

    var pessoa = data.retornarPessoaPorId(id);
    $('#txtNome').val(pessoa.nome);
    $('#txtEmail').val(pessoa.email);
    $('#txtTelefone').val(pessoa.telefone);

}

function cadastrar()
{
    var nome = $('#txtNome').val();
    var email = $('#txtEmail').val();
    var telefone = $('#txtTelefone').val();
    
    
    if(this.id != undefined)
    {
        //Alteração
        var newPessoa = {
            id: this.id,
            nome: nome,
            email: email,
            telefone: telefone
        };
        data.alterarPessoa(id, newPessoa);
    }
    else
    {
        //Novo Registro
        var newPessoa = {
            id: guid(),
            nome: nome,
            email: email,
            telefone: telefone
        };
        data.inserirPessoa(newPessoa);
    }

    window.location = 'lista.html';
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