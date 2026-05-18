async function buscar() {
    let cep = document.getElementById('cepInput').value;
    let resultado = document.getElementById('resultado');

    try {
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await resposta.json();

        if (dados.erro) {
            resultado.innerHTML = "CEP não encontrado!";
        } else {
            resultado.innerHTML = `Rua: ${dados.logradouro} <br> Bairro: ${dados.bairro} <br> Cidade: ${dados.localidade}/${dados.uf}`;
        }
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar a API.";
    }
}