const area = [
    ['0,4', '1,4', '2,4', '3,4', '4,4'],
    ['0,3', '1,3', '2,3', '3,3', '4,3'],
    ['0,2', '1,2', '2,2', '3,2', '4,2'],
    ['0,1', '1,1', '2,1', '3,1', '4,1'],
    ['0,0', '1,0', '2,0', '3,0', '4,0']
].reverse();
let posicaoSonda = area[0][0];
let operacao = +1;
let direcao = 'D';

/**
 * A sonda inicia no quadrante (x = 0, y = 0), 
 * o que se traduz como a casa mais inferior da esquerda; 
 * também inicia com a face para a direita.
 */
function posicaoInicial() {
    posicaoSonda = area[0][0];
}

/**
 * A sonda aceita três comandos:
 * 
 *  GE - girar 90 graus à esquerda
 *  GD - girar 90 graus à direta
 *  M - movimentar. Para cada comando M a sonda se move uma posição na direção à qual sua face está apontada.
 * 
 * Consideramos que um movimento para cima é o mesmo que dizer (x + 1, y), 
 * e um movimento para a direita é o mesmo que (x, y + 1).
 * 
 * @param {*} movimentacao 
 */
function movimentarSonda(movimentacao) {
    let movimentos = movimentacao.movimentacao;
    let posicao;

    for(let i = 0; i < movimentos.length; i++) {
        switch (movimentos[i]) {
            case 'GE':
                girarEsquerda();
                // if(direcao == 'E') {
                //     operacao = -1;
                //     direcao = 'B';
                // } else if(direcao == 'B') {
                //     operacao = +1;
                //     direcao = 'D';
                // } else if(direcao == 'D') {
                //     operacao = +1;
                //     direcao = 'C';
                // } else {
                //     operacao = -1;
                //     direcao = 'E';
                // }
                break;
            case 'GD':
                girarDireita();
                // if(direcao == 'E') {
                //     operacao = +1;
                //     direcao = 'C';
                // } else if(direcao == 'B') {
                //     operacao = -1;
                //     direcao = 'E';
                // } else if(direcao == 'D') {
                //     operacao = -1;
                //     direcao = 'B';
                // } else {
                //     operacao = +1;
                //     direcao = 'D';
                // }
                break;
            case 'M':
                posicao = getIndiceMatriz(posicaoSonda);

                let moveBC = area[posicao[0] + operacao][posicao[1]];
                let moveED = area[posicao[0]][posicao[1] + operacao];

                if(direcao == 'B' || direcao == 'C'){
                    // Verifica se o movimento é válido
                    if(typeof moveBC == "undefined"){
                        console.log("Erro: Um movimento inválido foi detectado");
                    } else {
                        posicaoSonda = moveBC;
                        console.log("Moveu para: " + posicaoSonda);
                    }
                } else {
                    // Verifica se o movimento é válido
                    if(typeof moveED == "undefined"){
                        console.log("Erro: Um movimento inválido foi detectado");
                    } else {
                        posicaoSonda = moveED;
                        console.log("Moveu para: " + posicaoSonda);
                    }
                }
                break;
            default:
                break;
        }
    }
}

function getPosicaoAtual() {;
    return posicaoSonda;
}

function getIndiceMatriz(posicao) {
    let linha, coluna = -1;
    let index;

    // Percorre o Array Bidimensional em busca do indíce do elemento
    for(let i = 0; i < area.length; i++) {
        index = area[i].findIndex(elemento => elemento == posicao);
        if(index != -1) {
            linha = i;
            coluna = index;
        }
    }

    return [linha, coluna];
}

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

module.exports = {posicaoInicial, movimentarSonda, getPosicaoAtual};