# Projeto Sonda Marte

[Definição do projeto](https://gist.github.com/sandsu/6b81ecde9d4bd1973df61579e84fe402)

## Configurar o ambiente

Após clonar o repositório é necessário baixar as dependências do projeto, para isso basta executar o comando abaixo:

> `npm install`

ou instalar as dependências individualmente:

> `npm i --save restify body-parser`

## Executando localmente

Agora que obtemos nossas depedências podemos executar a API, iremos usar o seguinte comando para executar localmente:

> `node index.js`

A API estará ativa em:

> `http://localhost:3000`

temos os seguintes Endpoints implementados:

```
get  -  /posicaoAtual
get  -  /posicaoInicial
post -  /movimentacao
```

Executando `/posicaoAtual` obtém como retorno a posição da Sonda no quadrante.

```
{
    "[x][y]": "0,0",
    "Direcao": "D"
}
```

Executando `/posicaoInicial` retorna a Sonda para a posição x = 0, y = 0 do quadrante. Não há retorno, apenas uma mensagem.

Executando `/movimentacao` obtemos a posição da Sonda caso `Sucesso`,

```
{
    "[x][y]": "0,0",
}
```

ou uma resposta no caso de `Erro`. 

```
{
    "erro": "Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de atravessar dimensões"
}
```


