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
    var dataLocalStorage = localStorage.getItem("data");
    if(dataLocalStorage != null)
        this.data.pessoas = JSON.parse(dataLocalStorage);
    else
        this.data.pessoas = new Array();
}

function setItem(pessoas)
{
    localStorage.setItem("data", JSON.stringify(pessoas));
}

function _inserirPessoa(pessoa)
{
    data.pessoas.push(pessoa);
    setItem(data.pessoas);
}

function _alterarPessoa(id, pessoaAlterada)
{
    var pessoa = this.retornarPessoaPorId(id);
    var index = data.pessoas.findIndex(pessoa => pessoa.id == id);

    data.pessoas[index] = pessoaAlterada;
    setItem(data.pessoas);
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
    setItem(data.pessoas);
}

