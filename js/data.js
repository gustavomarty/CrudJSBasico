var data = {
    pessoas: {},
    inserirPessoa: _inserirPessoa,
    alterarPessoa: _alterarPessoa,
    removerPessoa: _removerPessoa,
    retornarPessoaPorId: _retornarPessoaPorId
};

inicializar();

function inicializar()
{
    var data = localStorage.getItem("data");
    if(data != null)
        this.data.pessoas = JSON.parse(localStorage.getItem("data"));
    else
        this.data.pessoas = new Array();
}

function _inserirPessoa(pessoa)
{
    data.pessoas.push(pessoa);
    localStorage.setItem("data", JSON.stringify(data.pessoas));
}

function _alterarPessoa(id, pessoaAlterada)
{
    var pessoa = this.retornarPessoaPorId(id);
    var index = data.pessoas.findIndex(pessoa => pessoa.id == id);

    data.pessoas[index] = pessoaAlterada;
    localStorage.setItem("data", JSON.stringify(data.pessoas));
}

function _retornarPessoaPorId(id)
{
    var pessoa = data.pessoas.filter(function(item){
        return item.id == id;
    });
    return pessoa[0];
}

function _removerPessoa(id)
{
    var index = data.pessoas.findIndex(pessoa => pessoa.id == id);
    data.pessoas.splice(index, 1 );
    localStorage.setItem("data", JSON.stringify(data.pessoas));
}

