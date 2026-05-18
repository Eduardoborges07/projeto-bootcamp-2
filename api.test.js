test('Verifica se a API ViaCEP retorna dados no formato correto', async () => {
    const resposta = await fetch('https://viacep.com.br/ws/01001000/json/');
    const dados = await resposta.json();
    
    expect(dados.cep).toBe("01001-000");
    expect(dados.localidade).toBe("São Paulo");
});