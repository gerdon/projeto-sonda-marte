const quadrante = [
    ['0,4', '1,4', '2,4', '3,4', '4,4'],
    ['0,3', '1,3', '2,3', '3,3', '4,3'],
    ['0,2', '1,2', '2,2', '3,2', '4,2'],
    ['0,1', '1,1', '2,1', '3,1', '4,1'],
    ['0,0', '1,0', '2,0', '3,0', '4,0']
].reverse();

let posicaoSonda = quadrante[0][0];
let operacao = +1;
let direcao = 'D';

/**
 * A sonda inicia no quadrante (x = 0, y = 0), 
 * o que se traduz como a casa mais inferior da esquerda; 
 * também inicia com a face para a direita.
 */
function posicaoInicial() {
    posicaoSonda = quadrante[0][0];
    operacao = +1;
    direcao = 'D';
}

/**
 * A sonda aceita três comandos:
 * 
 *  GE - girar 90 graus à esquerda
 *  GD - girar 90 graus à direta
 *  M - movimentar. Para cada comando M a sonda se move uma posição na direção à qual sua face está apontada.
 * 
 * @param {*} movimentacao 
 */
function movimentarSonda(movimentacao) {
    let movimentos = movimentacao.movimentos;
    let statusMovimento;

    movimentos.forEach(movimento => {
        switch (movimento) {
            case 'GE':
                girarEsquerda();
                break;
            case 'GD':
                girarDireita();
                break;
            case 'M':
                statusMovimento = moverSonda();
                break;
            default:
                break;
        }
    });

    if(statusMovimento !== "Erro") {
        return {
            "[x][y]": posicaoSonda
        };
    } else {
        return {
            "erro": "Um movimento inválido foi detectado, infelizmente" +
            "a sonda ainda não possui a habilidade de atravessar dimensões"
        };
    }

}

/**
 * Obtém a posição atual da Sonda
 */
function getPosicaoAtual() {
    return {
        "[x][y]": posicaoSonda,
        "Direcao": direcao
    };
}

/**
 * Obtém o indíce da posição da sonda no quadrante
 * @param {*} posicao 
 */
function getIndiceMatriz(posicao) {
    let linha, coluna = -1;
    let index;

    // Percorre o Array Bidimensional em busca do indíce do elemento
    for(let i = 0; i < quadrante.length; i++) {
        index = quadrante[i].findIndex(elemento => elemento == posicao);
        if(index != -1) {
            linha = i;
            coluna = index;
        }
    }

    return [linha, coluna];
}

/**
 * Gira para esquerda, 
 * e atualiza a direcao do movimento
 */
function girarEsquerda() {
    switch (direcao) {
        case 'E':
            operacao = -1;
            direcao = 'B';    
            break;
        case 'B':
            operacao = +1;
            direcao = 'D';
            break;
        case 'D':
            operacao = +1;
            direcao = 'C';    
            break;
        case 'C':
            operacao = -1;
            direcao = 'E';    
            break;
        default:
            break;
    }
}

/**
 * Gira para direita, 
 * e atualiza a direcao do movimento
 */
function girarDireita() {
    switch (direcao) {
        case 'E':
            operacao = +1;
            direcao = 'C';    
            break;
        case 'B':
            operacao = -1;
            direcao = 'E';
            break;
        case 'D':
            operacao = -1;
            direcao = 'B';
            break;
        case 'C':
            operacao = +1;
            direcao = 'D';
            break;
        default:
            break;
    }
}

/**
 * Movimentar a sonda na direção que está apontando.
 * 
 * Consideramos que um movimento para cima é o mesmo que dizer (x + 1, y), 
 * e um movimento para a direita é o mesmo que (x, y + 1).
 */
function moverSonda() {
    let posicao = getIndiceMatriz(posicaoSonda);

    if(direcao == 'B' || direcao == 'C'){
        let operacaoBC = quadrante[posicao[0] + operacao][posicao[1]];

        // Verifica se o movimento é válido
        if(typeof operacaoBC == "undefined"){
            return "Erro";
        }
        
        posicaoSonda = operacaoBC;
        return "Sucesso";

    } else {
        let operacaoED = quadrante[posicao[0]][posicao[1] + operacao];

        // Verifica se o movimento é válido
        if(typeof operacaoED == "undefined"){
            return "Erro";
        }

        posicaoSonda = operacaoED;
        return "Sucesso";
    }
}

module.exports = {posicaoInicial, movimentarSonda, getPosicaoAtual};